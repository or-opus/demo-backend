import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, BaseEntity, DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class CrudService<T extends BaseEntity> {
  constructor(private readonly genericRepository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.genericRepository.find();
  }

  async findById(id: string): Promise<T> {
    const item: T = await this.genericRepository.findOne(id);
    if (!item) {
      throw new NotFoundException('Entity does not exist');
    }
    return item;
  }

  async create<E extends DeepPartial<T>>(entity: E): Promise<T> {
    return await this.genericRepository.create(entity).save();
  }

  async update(id: string, entity: QueryDeepPartialEntity<T>): Promise<T> {
    await this.genericRepository.update(id, entity);
    return this.findById(id);
  }

  async delete(id: string): Promise<any> {
    return await this.genericRepository.delete(id);
  }
}
