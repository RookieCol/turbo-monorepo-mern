import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsString, IsEnum } from 'class-validator';
import { Document } from 'mongoose';

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  CANCELED = 'CANCELED',
}

export type TaskDocument = Task & Document;

@Schema({
  timestamps: true,
  versionKey: false, // And this line
})
export class Task {
  @IsString()
  @Prop({
    required: true,
    trim: true,
  })
  title: string;
  
  @IsString()
  @Prop()
  description: string;

  @IsEnum(TaskStatus)
  @Prop({
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.OPEN,
  })
  status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
