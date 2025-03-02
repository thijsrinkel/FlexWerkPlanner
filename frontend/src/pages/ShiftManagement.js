import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShiftManagement() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchShifts = async () => {
      const response = await axios.get('/api/shifts');
      setShifts(response.data);
    };

    fetchShifts();
  }, []);

  return (
    <div>
      <h2>Shift Management</h2>
      <ul>
        {shifts.map(shift => (
          <li key={shift.id}>{shift.date} - {shift.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShiftManagement;