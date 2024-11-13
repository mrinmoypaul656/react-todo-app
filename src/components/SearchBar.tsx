import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const SearchBar: React.FC = () => {
  const { tasks } = useTasks(); // No need for setTasks here
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Display filtered tasks here as needed */}
    </div>
  );
};

export default SearchBar;
