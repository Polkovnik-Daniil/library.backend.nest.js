import { IsString, MinLength } from 'class-validator';
import { CreateRoleDto } from './create.role.dto';

export class UpdateRoleDto extends CreateRoleDto {
  id: string;
}
