import { useTasks } from "../context/useTasks";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  
  const { tasks }= useTasks()

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task}/>
      ))}
    </div>
  );
};

export default TaskList;
