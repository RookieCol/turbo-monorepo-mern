import React, { createContext, useEffect, useState } from "react";
import { CreateTask, Task, UpdateTask } from "../utils/interfaces";
import {
  createTaskRequest,
  getTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "../api/tasks";

interface TasksContextType {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: UpdateTask) => Promise<void>;
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTaskRequest();
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const createTask = async (task: CreateTask) => {
    try {
      const response = await createTaskRequest(task);
      const createdTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await deleteTaskRequest(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (id: string, task: UpdateTask) => {
    try {
      await updateTaskRequest(id, task);
      setTasks((prevTasks) =>
        prevTasks.map((taskItem) =>
          taskItem._id === id ? { ...taskItem, ...task } : taskItem
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, deleteTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
