import { Task } from "../utils/interfaces"

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div key={task._id} className="bg-gray-950 p-4 my-4 rounded-mid border-2 border-yellow-500 flex justify-between hover:bg-gray-900">
      <div>
        <h1 className="text-yellow-500 text-xl font-bold">{task.title}</h1>
        <p className="text-white">{task.description}</p>
      </div>
      <div>
        <button className="bg-green-500 hover:bg-yellow-600 py-2 px-4 rounded-md text-white mr-2">
          Update
        </button>
        <button className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md text-white">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
