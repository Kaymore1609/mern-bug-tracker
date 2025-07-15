import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, onUpdate, onDelete }) => {
  return (
    <ul>
      {bugs.map((bug) => (
        <BugItem key={bug._id} bug={bug} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default BugList;
