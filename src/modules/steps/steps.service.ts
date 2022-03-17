import { Injectable } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { Step } from './entities/step.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../base/crud.service';

// @Injectable()
// export class StepsService {
//   constructor(
//     @InjectRepository(Step)
//     private readonly stepRepository: Repository<Step>,
//   ) {}
//
//   create(createStepDto: CreateStepDto): Promise<Step> {
//     return this.stepRepository.save(this.stepRepository.create(createStepDto));
//   }
//
//   async findAll() {
//     return await this.stepRepository.find();
//   }
//
//   async findOne(id: string) {
//     return await this.stepRepository.findOne({ id });
//   }
//
//   async update(id: string, updateStepDto: UpdateStepDto) {
//     return this.stepRepository.update(id, updateStepDto);
//   }
//
//   async remove(id: string) {
//     return await this.stepRepository.delete(id);
//   }
// }

@Injectable()
export class StepsService extends CrudService<Step> {
  constructor(
    @InjectRepository(Step)
    private readonly stepRepository: Repository<Step>,
  ) {
    super(stepRepository);
  }
}
