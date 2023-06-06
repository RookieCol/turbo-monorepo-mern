import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.shcema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private taskmodel:Model<Task>){}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskmodel.create(createTaskDto);
  }

  async findAll() {
    return await this.taskmodel.find()
  }

  async findOne(id: string) {
    return await this.taskmodel.findById(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskmodel.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }
  

  async remove(id: string) {
    return await this.taskmodel.findByIdAndDelete(id);
  }
}
