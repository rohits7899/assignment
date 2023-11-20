import logo from './logo.svg';
import './App.css';
import ShoppingCart from './Components/ShoppingCart';
import Timer from './Components/useTimer';
import { ThemeProvider , useTheme } from './Components/ThemeContext';
import React, { useState} from 'react';
import EmployeeList from './Components/EmployeeList';
import AddEmployeeForm from './Components/AddEmployeeForm';


function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
}


function App() {

  const [employees, setEmployees] = useState([
   
   
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
  };

  const modifyEmployee = (id, updatedEmployee) => {
    // Logic to modify employee details
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, ...updatedEmployee } : employee
    );
    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    // Logic to delete an employee from the list
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };


  return (
   
    <div className="App"> 

      <h1>Employee Management System</h1>
      <AddEmployeeForm addEmployee={addEmployee} />
      <EmployeeList
        employees={employees}
        modifyEmployee={modifyEmployee}
        deleteEmployee={deleteEmployee}
      />
      <Timer />
      <ShoppingCart /> 
      <ThemeProvider>
      <div>
        <h1>Theme Toggler</h1>
        <ThemeToggler />
      </div>
    </ThemeProvider>   
    </div>
    
  );
}

export default App;
