import { useEffect } from 'react';
import { useCalendar } from '../../contexts/CalendarContext'; // Adjust the import path as necessary
import { addDays, isSameDay } from 'date-fns';
import { useView } from '../../contexts/ViewContext';

export const useKeyboardNavigation = (onEnter) => {
  const { selectedDay, setSelectedDay } = useCalendar();
  const { currentView, setCurrentView, isSidebarMinimized, setIsSidebarMinimized, isPopupOpen } = useView();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isSidebarMinimized || isPopupOpen) {
        return;
      }
      else if (currentView == 'monthView') {
          let newSelectedDay = selectedDay;
          switch (e.key) {
            case 'ArrowRight':
              newSelectedDay = addDays(selectedDay, 1);
              break;
            case 'ArrowLeft':
              newSelectedDay = addDays(selectedDay, -1);
              break;
            case 'ArrowUp':
              newSelectedDay = addDays(selectedDay, -7);
              break;
            case 'ArrowDown':
              newSelectedDay = addDays(selectedDay, 7);
              break;
            case 'Enter':
              if (onEnter) onEnter();
              break;
            default:
              break;
          }
          if (!isSameDay(newSelectedDay, selectedDay)) {
            setSelectedDay(newSelectedDay);
          }
      } else if (currentView == 'weekView') {
        let newSelectedDay = selectedDay;
          switch (e.key) {
            case 'ArrowRight':
              newSelectedDay = addDays(selectedDay, 1);
              break;
            case 'ArrowLeft':
              newSelectedDay = addDays(selectedDay, -1);
              break;
            case 'Enter':
              if (onEnter) onEnter(); // Call the onEnter function if defined
              break;
            default:
              break;
          }
          if (!isSameDay(newSelectedDay, selectedDay)) {
            setSelectedDay(newSelectedDay);
          }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDay, setSelectedDay, isSidebarMinimized, isPopupOpen, currentView]);
};
