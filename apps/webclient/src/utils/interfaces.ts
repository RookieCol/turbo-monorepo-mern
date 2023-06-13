// Define the task status enum
export enum TaskStatus {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  CANCELED = "CANCELED",
}

// Define the task interface
export interface Task {
  _id: string; // Unique identifier for the task
  title: string; // Title of the task
  description?: string; // Optional description of the task
  status?: TaskStatus; // Optional status of the task
  createdAt?: Date; // Optional creation date of the task
  updatedAt?: Date; // Optional update date of the task
}

// Define the type for creating a new task
export type CreateTask = Omit<Task, "_id" | "createdAt" | "updatedAt">;

// Define the type for updating a task (partial fields)
export type UpdateTask = Partial<CreateTask>;
