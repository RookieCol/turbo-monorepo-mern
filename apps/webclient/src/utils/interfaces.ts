// Define the task status enum
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    CANCELED = 'CANCELED',
  }


// Define the task interface
export interface Task {
    _id:string;
    title: string;
    description?: string;
    status?: TaskStatus;
    createdAt?:Date;
    updatedAt?:Date;
  }
  
export type CreateTask = Omit<Task, '_id' | 'createdAt'|'updatedAt'>