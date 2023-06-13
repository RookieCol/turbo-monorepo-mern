import { CreateTask, UpdateTask } from "../utils/interfaces";

export async function createTaskRequest(task: CreateTask) {
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response;
}

export const getTaskRequest = async () => {
  const response = await fetch('http://localhost:3000/api/tasks');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response;
};

export const deleteTaskRequest = async (taskId: string) => {
  const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};

export const updateTaskRequest = async (taskId: string, task: UpdateTask) => {
  const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};
