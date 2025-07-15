import React from 'react';

const BugItem = ({ bug, onUpdate, onDelete }) => {
  const toggleStatus = () => {
    const newStatus = bug.status === 'open' ? 'closed' : 'open';
    onUpdate(bug._id, { status: newStatus });
  };

  return (
    <li>
      <strong>{bug.title}</strong> — {bug.status}
      <button onClick={toggleStatus} style={{ marginLeft: '1rem' }}>
        Toggle Status
      </button>
      <button onClick={() => onDelete(bug._id)} style={{ marginLeft: '0.5rem' }}>
        Delete
      </button>
    </li>
  );
};

export default BugItem;
