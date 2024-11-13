import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import SearchBar from './components/SearchBar';
import './styles.css'; 

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <SearchBar />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
