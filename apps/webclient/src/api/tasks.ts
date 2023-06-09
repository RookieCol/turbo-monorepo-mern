import { CreateTask, Task } from "../utils/interfaces";

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
  

  export const getTaskRequest = async()=>{
    return fetch('http://localhost:3000/api/tasks')
  }