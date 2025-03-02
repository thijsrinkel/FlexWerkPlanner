import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee Management</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeManagement;