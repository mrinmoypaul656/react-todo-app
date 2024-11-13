import React from 'react';
import { useTasks } from '../context/TaskContext';

type TaskItemProps = {
  task: { id: string; title: string; completed: boolean };
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
};

export default TaskItem;
