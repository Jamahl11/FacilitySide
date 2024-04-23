import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MonthView from './views/MonthView';
// import WeekView from './views/WeekView';
import ResidentView from './views/ResidentView';
import DayView from './views/DayView';
import ActivityManager from './views/ActivityManager';
import Sidebar from './components/Navigation/Sidebar';
import { CalendarProvider } from './contexts/CalendarContext';
import { ViewProvider } from './contexts/ViewContext';
import { SocketProvider } from './components/Navigation/socket';

function App() {
  return (
    <SocketProvider>
      <ViewProvider>
        <CalendarProvider>
          <Router>
            <div className="app">
              <Sidebar />
              <Routes>
                <Route path="/" element={<MonthView />} end />
                {/* <Route path="/week" element={<WeekView />} /> */}
                <Route path="/day" element={<DayView />} />
                <Route path="/ActivityManager" element={<ActivityManager />} />
                <Route path="/ResidentView" element={<ResidentView />} />
              </Routes>
            </div>
          </Router>
        </CalendarProvider>
      </ViewProvider>
    </SocketProvider>
  );
}

export default App;



