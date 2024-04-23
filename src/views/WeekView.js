// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { format, startOfWeek, endOfWeek, addDays, isSameDay, eachDayOfInterval } from 'date-fns';
// import { useCalendar, eventDateToOffsetString } from '../contexts/CalendarContext';
// import { useView } from '../contexts/ViewContext';
// import DayCell from '../components/CalendarComponents/DayCell';
// import AddEventPopup from '../components/AddEventPopup';
// import './CalendarViews.css'; // Adjust import path as necessary
// import { useKeyboardNavigation } from '../components/Navigation/useKeyboardNavigation';
// import { useSocketNavigation } from '../components/Navigation/useSocketNavigation';
// const 
// /*const WeekView = () => {
//     const { events, selectedDay, setEditingEvent, editingEvent } = useCalendar();
//     const { isPopupOpen, setIsPopupOpen } = useView();
//     const navigate = useNavigate();

//     const startWeek = startOfWeek(selectedDay, { weekStartsOn: 0 }); // Adjust weekStartsOn if necessary
//     const endWeek = endOfWeek(selectedDay, { weekStartsOn: 0 });
//     const daysOfWeek = eachDayOfInterval({ start: startWeek, end: endWeek });

//     useKeyboardNavigation(() => {
//         navigate(`/day`);
//     });

//     useSocketNavigation(() => {
//         navigate(`/day`);
//     });

//     const handleEventClick = (event) => {
//         setEditingEvent(event);
//         setIsPopupOpen(true);
//     };

//     // Function to render days of the week names
//     const renderDaysOfWeek = () => {
//         const dateFormat = "E";
//         return (
//             <div className="days row">
//                 {daysOfWeek.map((day, i) => (
//                     <div className="column col-center" key={i}>
//                         {format(day, dateFormat)}
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className="calendar-view week-view">
//             <div className="header row flex-middle">
//                 <div className="col col-center title">
//                     <span>{`${format(startWeek, 'MMMM d')} - ${format(endWeek, 'MMMM d, yyyy')}`}</span>
//                 </div>
//             </div>
//             <div className="days-of-week">
//                 {renderDaysOfWeek()}
//             </div>
//             <div className="weekView days row">
//                 {daysOfWeek.map(day => {
//                     // Filter events for the current day
//                     const dayEvents = events.filter(event => isSameDay(new Date(eventDateToOffsetString(event.date)), day));

//                     return (
//                         <DayCell
//                             key={day.toISOString()} // Using toISOString for a unique key
//                             day={day}
//                             dayEvents={dayEvents} // Pass filtered events to each DayCell
//                             onEventClick={handleEventClick} // Pass the function to handle event clicks
//                             isSelected={isSameDay(day, selectedDay)}
//                             isCurrentMonth={day.getMonth() === selectedDay.getMonth()}
//                         />
//                     );
//                 })}
//             </div>
//             {isPopupOpen && <AddEventPopup closePopup={() => setIsPopupOpen(false)} editingEvent={editingEvent} />}
//         </div>
//     );
// };
// */
// // App.js

// //import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import JS from './guy1.png';
// import MJ from './lady1.png';
// import JW from './guy2.png';
// import PB from './lady2.png';
// import RJ from './guy3.png';
// import LM from './lady3.png';
// import MD from './guy4.png';
// import BW from './lady4.png';
// import WM from './guy5.png';
// import ET from './lady5.png';
// import DA from './guy6.png';
// import JT from './lady1.png';
// import RJa from './guy7.png';
// import SW from './lady2.png';
// import JH from './guy1.png';
// import MC from './lady3.png';
// import TL from './guy2.png';
// import DAL from './lady4.png';
// import CW from './guy3.png';
// import SK from './lady5.png';
// import CWr from './guy4.png';
// import KR from './lady1.png';
// import DM from './guy5.png';
// import BY from './lady2.png';
// import PH from './guy6.png';
// import LR from './lady3.png';
// import MCL from './guy7.png';
// import NC from  './lady4.png';
// import SM from './guy1.png';
// import LP from './lady5.png';
// import EC from  './guy2.png';
// import KT from './lady1.png';
// import BC from './guy3.png';
// import HP from './lady2.png';
// import GP from './guy4.png';
// import DE from './lady3.png';
// import RT from './guy5.png';
// import CN from './lady4.png';
// import KH from './guy6.png';
// import AH from './lady5.png';
// import GA from './guy7.png';
// import DB from './lady1.png';
// import LG from './guy1.png';
// import SG from './lady2.png';
// import ES from './guy2.png';
// import CA from './lady3.png';
// import SB from './guy3.png';
// import BG from './lady4.png';
// import RG from './guy4.png';
// import GS from './lady5.png';

// const usersData = [
//   { id: 1, name: 'James Smith', photoUrl: JS, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}, {date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 2, name: 'Mary Johnson', photoUrl: MJ, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 3, name: 'John Williams', photoUrl: JW, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 4, name: 'Patricia Brown', photoUrl: PB, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 5, name: 'Robert Jones', photoUrl: RJ, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 6, name: 'Linda Miller', photoUrl: LM, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 7, name: 'Michael Davis', photoUrl: MD,activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 8, name: 'Barbara Wilson', photoUrl: BW, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 9, name: 'William Moore', photoUrl: WM, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]   },
//   { id: 10, name: 'Elizabeth Taylor', photoUrl: ET, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 11, name: 'David Anderson', photoUrl: DA, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 12, name: 'Jennifer Thomas', photoUrl: JT, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 13, name: 'Richard Jackson', photoUrl: RJa, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 14, name: 'Susan White', photoUrl: SW, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 15, name: 'Joseph Harris', photoUrl: JH, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 16, name: 'Margaret Clark', photoUrl: MC, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 17, name: 'Thomas Lewis', photoUrl: TL, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 18, name: 'Dorothy Allen', photoUrl: DAL, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 19, name: 'Charles Walker', photoUrl: CW, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 20, name: 'Sandra King', photoUrl: SK, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 21, name: 'Christopher Wright', photoUrl: CWr, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 22, name: 'Karen Rodriguez', photoUrl: KR, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 23, name: 'Daniel Martinez', photoUrl: DM, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 24, name: 'Betty Young', photoUrl: BY, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 25, name: 'Paul Hernandez', photoUrl: PH, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 26, name: 'Lisa Robinson', photoUrl: LR, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 27, name: 'Mark Clark', photoUrl: MCL, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 28, name: 'Nancy Carter', photoUrl: NC, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 29, name: 'Steven Mitchell', photoUrl: SM, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 30, name: 'Laura Perez', photoUrl: LP, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 31, name: 'Edward Collins', photoUrl: EC, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 32, name: 'Kathleen Turner', photoUrl: KT, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 33, name: 'Brian Campbell', photoUrl: BC, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 34, name: 'Helen Parker', photoUrl: HP, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 35, name: 'George Phillips', photoUrl: GP, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 36, name: 'Debra Evans', photoUrl: DE, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 37, name: 'Ronald Torres', photoUrl: RT, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 38, name: 'Carol Nelson', photoUrl: CN, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 39, name: 'Kevin Hall', photoUrl: KH, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 40, name: 'Ann Hill', photoUrl: AH, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 41, name: 'Gary Adams', photoUrl: GA, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 42, name: 'Diane Baker', photoUrl: DB, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 43, name: 'Larry Gonzales', photoUrl: LG, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 44, name: 'Shirley Green', photoUrl: SG, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 45, name: 'Eric Scott', photoUrl: ES, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}]  },
//   { id: 46, name: 'Cynthia Adams', photoUrl: CA, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 47, name: 'Stephen Baker', photoUrl: SB, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 48, name: 'Beverly Gonzalez', photoUrl: BG, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 49, name: 'Raymond Green', photoUrl: RG, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] },
//   { id: 50, name: 'Gloria Scott', photoUrl: GS, activities: [{date: '2024-04-15', title: 'Meeting with Bob', description: 'Discuss project timeline.'}] }
// ];

// function UserListPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [expandedUserId, setExpandedUserId] = useState(null);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleUserActivities = (userId) => {
//     setExpandedUserId(prevId => (prevId === userId ? null : userId));
//   };

//   const filteredUsers = usersData.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="user-list-page-container">
//       <div className="user-list-header">
//         <h1>User List</h1>
//       </div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="search-input"
//       />
//       <div className="user-list">
//         {filteredUsers.map(user => (
//           <div key={user.id} className="user-item">
//             <img src={user.photoUrl} alt={user.name} className="user-item-image" />
//             <div className="user-item-content">
//               <span>{user.name}</span>
//               <button onClick={() => toggleUserActivities(user.id)}>
//                 {expandedUserId === user.id ? 'Hide Events' : 'Show Events'}
//               </button>
//             </div>
//             {expandedUserId === user.id && (
//               <div className="user-activities">
//                 <ul className="activity-list">
//                   {user.activities.map((activity, index) => (
//                     <li key={index} className="activity-item">
//                       <div className="activity-title">{activity.title}</div>
//                       <div className="activity-details">
//                         <div className="activity-detail">Time: {activity.date}</div>
//                         <div className="activity-detail">Description: {activity.description}</div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default UserListPage;

// // function WeekView() {
// //   const [selectedUser, setSelectedUser] = useState(usersData[0]);
// //   //const [selectedUser, setSelectedUser] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState(''); // Add this line
// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   // Filter users based on the search term
// //   const filteredUsers = usersData.filter(user =>
// //     user.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   ); 

// //   return (
// //     <div className="app-container">
// //         <div className="profile-calendar-container">
// //   <div className="calendar-container">
// //     <h2>{selectedUser.name}'s Calendar</h2>
// //     <Calendar
// //       onChange={setSelectedDate}
// //       value={selectedDate}
// //     />
// //   </div>
// //   <div className="activities-container">
// //     <h3>Activities for {selectedDate.toDateString()}</h3>
// //     <ul>
// //       {selectedUser.activities
// //         .filter(activity => activity.date === selectedDate.toISOString().split('T')[0])
// //         .map((activity, index) => (
// //           <li key={index}>
// //             <strong>{activity.title}</strong>: {activity.description}
// //           </li>
// //         ))
// //       }
// //     </ul>
// //   </div>
// // </div>

// //       {selectedUser ? (
// //         <div>
// //           <div className="back-arrow" onClick={() => setSelectedUser(null)}>← Back</div>
// //           <div className="calendar-container">
// //             <h2>{selectedUser.name}'s Calendar</h2>
// //             <Calendar
// //                 onChange={setSelectedDate}
// //                 value={selectedDate}
// //             />
// //           </div>
// //         </div>
// //       ) : (
// //         <>
// //         <input
// //         type="text"
// //         placeholder="Search users..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //         className="search-input"
// //     />
// //         <div className="user-grid">
// //           {usersData.map(user => (
// //             <div key={user.id} className="user-profile" onClick={() => setSelectedUser(user)}>
// //               <img src={user.photoUrl} alt={`${user.name}'s profile`} className="profile-photo" />
// //               <div className="name-banner">{user.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //         </>
// //         )}
// //         </div>
// //   );
// // }
// // //export default App;

// //export default WeekView;
// eekView;
//    <div className="name-banner">{user.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //         </>
// //         )}
// //         </div>
// //   );
// // }
// // //export default App;

// //export default WeekView;
// oUrl} alt={`${user.name}'s profile`} className="profile-photo" />
// //               <div className="name-banner">{user.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //         </>
// //         )}
// //         </div>
// //   );
// // }
// // //export default App;

// //export default WeekView;
// oUrl} alt={`${user.name}'s profile`} className="profile-photo" />
// //               <div className="name-banner">{user.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //         </>
// //         )}
// //         </div>
// //   );
// // }
// // //export default App;

// //export default WeekView;
// oUrl} alt={`${user.name}'s profile`} className="profile-photo" />
// //               <div className="name-banner">{user.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //         </>
// //         )}
// //         </div>
// //   );
// // }
// // //export default App;

// //export default WeekView;
// oUrl} alt={`${user.name}'s profile`} className="profile-photo" />
// //               <div className="name-banner">{user.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //         </>
// //         )}
// //         </div>
// //   );
// // }
// // //export default App;

// //export default WeekView;
