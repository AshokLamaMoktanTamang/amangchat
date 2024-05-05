import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(entity: Partial<T>): Promise<T> {
    return this.model.create(entity);
  }

  async findOne(query: FilterQuery<T>): Promise<T | null> {
    return this.model.findOne(query).exec();
  }

  async findAll(query: FilterQuery<T> = {}): Promise<T[]> {
    return this.model.find(query).exec();
  }
}
