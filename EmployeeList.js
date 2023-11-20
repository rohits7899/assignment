import React, { useState } from 'react';

function EmployeeList({ employees, modifyEmployee, deleteEmployee }) {
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedPosition, setEditedPosition] = useState('');
  const [editedSalary, setEditedSalary] = useState('');

  const handleModify = (id, name, position, salary) => {
    setEditingId(id);
    setEditedName(name);
    setEditedPosition(position);
    setEditedSalary(salary);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedName('');
    setEditedPosition('');
    setEditedSalary('');
  };

  const saveEdit = () => {
    modifyEmployee(editingId, {
      name: editedName,
      position: editedPosition,
      salary: editedSalary,
    });
    cancelEdit();
  };

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <div key={employee.id} className="employee">
          {editingId === employee.id ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedPosition}
                onChange={(e) => setEditedPosition(e.target.value)}
              />
              <input
                type="number"
                value={editedSalary}
                onChange={(e) => setEditedSalary(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <p>Name: {employee.name}</p>
              <p>Position: {employee.position}</p>
              <p>Salary: {employee.salary}</p>
              <button onClick={() => handleModify(employee.id, employee.name, employee.position, employee.salary)}>Modify</button>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;