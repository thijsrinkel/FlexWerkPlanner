import React, { useState } from 'react';
import axios from 'axios';

function AIPlanner() {
  const [schedule, setSchedule] = useState([]);

  const generateSchedule = async () => {
    try {
      const response = await axios.post('/api/ai/generate-schedule', {
        employees: [], // Fetch or provide the employee data
        shifts: [] // Fetch or provide the shift data
      });
      setSchedule(response.data);
    } catch (error) {
      console.error('Error generating schedule', error);
    }
  };

  return (
    <div>
      <h2>AI Planner</h2>
      <button onClick={generateSchedule}>Generate Schedule</button>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>{item.employee.name} - {item.shift.date} - {item.shift.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default AIPlanner;