import React, { createContext, useEffect, useState } from "react";
import { CreateTask, Task } from "../utils/interfaces";
import { createTaskRequest, getTaskRequest } from "../api/tasks";

interface TasksContextType {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  createTask: () => [],
});

interface Props {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);
  const createTask = async (task: CreateTask) => {
    const response = await createTaskRequest(task);
    const createdTask = await response.json();
    setTasks([...tasks, createdTask]);
  };

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
};
