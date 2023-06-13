import React, { useState } from "react";
import { useTasks } from "../context/useTasks";
import { Task, TaskStatus } from "../utils/interfaces";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri";

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTask, setUpdatedTask] = useState<Task>({ ...task });

  const handleUpdate = async () => {
    await updateTask(task._id, updatedTask);
    setIsUpdating(false); // Reset the updating state after the update
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const getStatusColorClass = (status?: TaskStatus) => {
    switch (status) {
      case TaskStatus.OPEN:
        return "text-green-500";
      case TaskStatus.IN_PROGRESS:
        return "text-yellow-500";
      case TaskStatus.DONE:
        return "text-blue-500";
      case TaskStatus.CANCELED:
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <div
      key={task._id}
      className="bg-gray-900 p-4 my-4 rounded-md border-2 border-yellow-500 flex justify-between hover:bg-gray-800"
    >
      <div className="flex flex-col">
        {isUpdating ? (
          <>
            <input
              type="text"
              name="title"
              value={updatedTask.title}
              onChange={handleInputChange}
              className="text-black bg-gray-200 rounded px-2 py-1 mb-2"
              placeholder="Title"
            />
            <textarea
              name="description"
              value={updatedTask.description || ""}
              onChange={handleInputChange}
              className="text-black bg-gray-200 rounded px-2 py-1 mb-2"
              placeholder="Description"
            />
            <select
              name="status"
              value={updatedTask.status || TaskStatus.OPEN}
              onChange={handleInputChange}
              className="text-black bg-gray-200 rounded px-2 py-1"
            >
              {Object.values(TaskStatus).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <div className="flex justify-end mt-2">
              <button
                onClick={handleUpdate}
                className="bg-green-500 hover:bg-yellow-600 py-2 px-4 rounded-md text-white mr-2"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsUpdating(false)}
                className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md text-white"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-yellow-500 text-xl font-bold">{task.title}</h1>
            <p className="text-white">{task.description}</p>
            <span className="text-white mb-2">
              <strong>Status:</strong>{" "}
              <span
                className={`inline-block ${getStatusColorClass(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </span>
          </>
        )}
      </div>

      {!isUpdating && (
        <div>
          <button
            onClick={() => setIsUpdating(true)}
            className="bg-green-500 hover:bg-yellow-600 py-2 px-4 rounded-md text-white mr-2"
          >
            <RiEdit2Line className="inline-block mr-1" />
          </button>
          <button
            onClick={async () => {
              if (!window.confirm("Confirm the task deletion")) return;
              await deleteTask(task._id);
            }}
            className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md text-white"
          >
            <RiDeleteBinLine className="inline-block mr-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
