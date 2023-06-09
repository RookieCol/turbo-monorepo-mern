import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Task, TaskStatus } from '../utils/interfaces';
import { createTaskRequest } from '../api/task';



// Use the interface and enum in your component
const TaskForm: React.FC = () => {
  const [task, setTask] = useState<Task>({ title: '', description: '', status: TaskStatus.OPEN });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTask((prevTasks) => ({ ...prevTasks, [name]: value }));
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createTaskRequest(task);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          className="w-full border-2 border-gray-700 p-2 rounded-lg bg-gray-900 text-white"
          placeholder="Write a title"
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows={3}
          className="w-full border-2 border-gray-700 p-2 rounded-lg bg-gray-900 text-white"
          placeholder="Write a description"
          value={task.description}
          onChange={handleChange}
        />
        <select
          name="status"
          className="form-select w-1/2 py-1.5 rounded-md text-gray-600 bg-gray-900"
          value={task.status || ""}
          onChange={handleChange}
        >
          <option value={TaskStatus.OPEN}>Open</option>
          <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
          <option value={TaskStatus.DONE}>Done</option>
          <option value={TaskStatus.CANCELED}>Canceled</option>
        </select>
        <button  
        type='submit'
        className="w-1/2 py-2 mt-4 bg-yellow-400 text-black rounded-lg mx-auto block">Save</button>
      </form>
    </div>
  );
};

export default TaskForm;
