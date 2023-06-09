// Define the task status enum
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
    CANCELED = 'CANCELED',
  }


// Define the task interface
export interface Task {
    title: string;
    description?: string;
    status?: TaskStatus;
  }
  