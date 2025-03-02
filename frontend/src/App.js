import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import ShiftManagement from './pages/ShiftManagement';
import AIPlanner from './pages/AIPlanner';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/employees" component={EmployeeManagement} />
        <Route path="/shifts" component={ShiftManagement} />
        <Route path="/ai-planner" component={AIPlanner} />
      </Switch>
    </Router>
  );
}

export default App;