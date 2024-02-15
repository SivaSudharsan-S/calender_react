import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="app">
      <h1>My Calendar App</h1>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={date}
        />
      </div>
    </div>
  );
}
export default App;