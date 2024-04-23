import React, { useState } from 'react';

const AddActivityPopup = ({ closePopup, addActivity }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const activity = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      description: description,
    };
    addActivity(activity);
    closePopup(); // Close the popup after adding the activity
  };

  const handleCancel = () => {
    closePopup(); // Close the popup when Cancel button is clicked
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add New Activity</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Activity Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Event Date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          <input
            type="time"
            placeholder="Event Time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div className="buttons">
            <button type="submit">Add Activity</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddActivityPopup;
