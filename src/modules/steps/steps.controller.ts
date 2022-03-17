import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { Step } from './entities/step.entity';
import { CrudController } from '../base/crud.controller';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BaseEntity } from "typeorm";

// @ApiTags('steps')
// @Controller('steps')
// export class StepsController {
//   constructor(private readonly stepsService: StepsService) {}
//
//   @Post()
//   @ApiOperation({ summary: 'Create cat' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   @ApiOkResponse({ description: 'Cat object', type: Step }) // <= diff is here
//   async create(@Body() createStepDto: CreateStepDto): Promise<Step> {
//     return this.stepsService.create(createStepDto);
//   }
//
//   @Get()
//   findAll(): Promise<Step[]> {
//     return this.stepsService.findAll();
//   }

// @Get(':id')
// findOne(@Param('id') id: string) {
//   const step = this.stepsService.findOne(id);
//   if (!step) {
//     throw new NotFoundException();
//   }
//   return step;
// }
//
// @Patch(':id')
// update(@Param('id') id: string, @Body() updateStepDto: UpdateStepDto) {
//   return this.stepsService.update(id, updateStepDto);
// }
//
// @Delete(':id')
// delete(@Param('id') id: string) {
//   return this.stepsService.remove(id);
// }
//}

@Controller('steps')
export class StepsController extends CrudController<Step> {
  constructor(private readonly stepService: StepsService) {
    super(stepService);
  }

  @Get()
  @ApiResponse({ type: [Step] })
  async findAll(): Promise<Step[]> {
    return super.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Step> {
    return super.findById(id);
  }

  @Post()
  async create(@Body() entity: Step): Promise<Step> {
    return super.create(entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return super.delete(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() entity: Step): Promise<Step> {
    return super.update(id, entity);
  }
}
