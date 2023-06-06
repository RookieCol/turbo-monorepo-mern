import { IsString, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../schemas/task.shcema';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status: TaskStatus;
}
