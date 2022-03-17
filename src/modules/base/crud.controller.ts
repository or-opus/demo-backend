import { Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BaseEntity } from 'typeorm';
import { ICrudService } from './icrud.service';

export class CrudController<T extends BaseEntity> {
  constructor(private readonly crudService: ICrudService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  async findAll(): Promise<T[]> {
    return this.crudService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Entity retrieved successfully.',
  })

  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async findById(@Param('id') id: string): Promise<T> {
    return this.crudService.findById(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() entity: T): Promise<T> {
    return this.crudService.create(entity);
  }

  @Patch(':id')
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  async update(@Param('id') id: string, @Body() entity: T): Promise<T> {
    return this.crudService.update(id, entity);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async delete(@Param('id') id: string) {
    return this.crudService.delete(id);
  }
}
