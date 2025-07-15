import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import './App.css';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch('/bugs')
      .then((res) => res.json())
      .then((data) => setBugs(data))
      .catch((err) => console.error('Error fetching bugs:', err));
  }, []);

  const addBug = async (bug) => {
    const res = await fetch('/bugs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bug),
    });
    const newBug = await res.json();
    setBugs((prev) => [...prev, newBug]);
  };

  const updateBug = async (id, updates) => {
    const res = await fetch(`/bugs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    const updated = await res.json();
    setBugs((prev) => prev.map((bug) => (bug._id === id ? updated : bug)));
  };

  const deleteBug = async (id) => {
    await fetch(`/bugs/${id}`, { method: 'DELETE' });
    setBugs((prev) => prev.filter((bug) => bug._id !== id));
  };

  return (
    <div className="App">
      <h1>
        <img
          src="https://th.bing.com/th?q=Bug+Tracker+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-ZA&cc=ZA&setlang=en&adlt=moderate&t=1&mw=247"
          alt="Bug icon"
          style={{
            width: '50px',
            marginRight: '5px',
            verticalAlign: 'middle',
          }}
        />
        BUG TRACKER
      </h1>
      <BugForm onAdd={addBug} />
      <BugList bugs={bugs} onUpdate={updateBug} onDelete={deleteBug} />
    </div>
  );
}
export default App;







