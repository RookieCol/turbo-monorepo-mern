import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.shcema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskmodel:Model<Task>){}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskmodel(createTaskDto);
    try {
      return await newTask.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      } else {
        throw error;
      }
    }
  }

  async findAll() {
    const tasks = await this.taskmodel.find();
    if (!tasks || tasks.length === 0) {
      throw new NotFoundException('No tasks found');
    }
    return tasks;
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskmodel.findById(id).exec();
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }
  

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.taskmodel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
    if (!updatedTask) {
      throw new NotFoundException('Task not found');
    }
    return updatedTask;
  }
  

  async remove(id: string) {
    const deletedTask = await this.taskmodel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new NotFoundException('Task not found');
    }
    return deletedTask;
  }
}
