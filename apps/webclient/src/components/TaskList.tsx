import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tasks";
import { Task } from "../utils/interfaces";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data)); 
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
