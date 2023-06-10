import { useContext } from "react";
import { TasksContext } from "./tasksContext";

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return context;
};
