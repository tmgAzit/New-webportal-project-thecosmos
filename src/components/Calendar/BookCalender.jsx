import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Make an HTTP request to your PHP script to fetch events
    axios.get('http://localhost/guardian_web_portal/bookings.php')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <h4 className='profile-title' style={{ display: 'flex', justifyContent: 'center' }}> Booking calendar</h4>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
      />
      {selectedEvent && (
        <div>
          <h2>Event Details</h2>
          <p>Title: {selectedEvent.title}</p>
          <p>Start: {moment(selectedEvent.startDate).format('LLL')}</p>
          <p>End: {moment(selectedEvent.endDate).format('LLL')}</p>
          <p>Description: {selectedEvent.description}</p>
          
        </div>
      )}
    </div>
  );
}

export default MyCalendar;
