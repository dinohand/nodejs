import { PartialType } from '@nestjs/mapped-types';
import { CreateSoscDto } from './create-sosc.dto';

export class UpdateSoscDto extends PartialType(CreateSoscDto) {}
