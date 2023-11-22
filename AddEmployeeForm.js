import React, { useState } from 'react';

function AddEmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name: name,
      position: position,
      salary: salary,
    };
    addEmployee(newEmployee);
    setName('');
    setPosition('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-employee-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required // Ensures the field is required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;
