import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskFilter: React.FC = () => {
  const { filter, setFilter } = useTasks();

  return (
    <div>
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>Incomplete</button>
    </div>
  );
};

export default TaskFilter;
