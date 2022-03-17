export interface ICrudService<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  create(entity: T): Promise<T>;
  delete(id: string): Promise<any>;
}
