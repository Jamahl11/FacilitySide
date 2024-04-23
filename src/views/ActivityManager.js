// ActivityManager.js

import React, { Component } from 'react';
import AddActivityPopup from '../components/AddActivityPopup';
import './ActivityManager.css'; // Import CSS file for styling

class ActivityManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: {},
      isPopupOpen: false,
    };
  }

  addActivity = (activity) => {
    const id = Date.now().toString();
    this.setState(prevState => ({
      activities: {
        ...prevState.activities,
        [id]: activity,
      },
      isPopupOpen: false,
    }));
  };

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  render() {
    const { activities, isPopupOpen } = this.state;
    return (
      <div className="activity-manager">
        <h1>Activities</h1>
        <button onClick={this.openPopup}>Add Activity</button>
        {isPopupOpen && <AddActivityPopup closePopup={() => this.setState({ isPopupOpen: false })} addActivity={this.addActivity} />}
        <div>
          <h2>All Activities</h2>
          <ul className="activity-list">
            {Object.keys(activities).map(id => (
              <li key={id} className="activity-item">
                <div>
                  <span className="activity-info">
                    <strong>Date:</strong> {activities[id].date}, 
                    <strong> Time:</strong> {activities[id].time}
                  </span>
                  <span className="activity-info">
                    <strong>Title:</strong> {activities[id].name}
                  </span>
                  <span className="activity-info">
                    <strong>Description:</strong> {activities[id].description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ActivityManager;