import { Entity } from '../entities/entity'
import { NotFoundError } from '../errors/not-found-error'
import { IRepository } from './repository-contracts'

export abstract class InMemoryRepository<E extends Entity>
  implements IRepository<E>
{
  items: E[] = []

  async inset(entity: E): Promise<void> {
    this.items.push(entity)
  }

  async findById(id: string): Promise<E> {
    const entity = this.items.find(item => item.id === `${id}`)
    if (!entity) {
      throw new NotFoundError('Entity not found!')
    }
    return entity
  }

  async findAll(): Promise<E[]> {
    return this.items
  }

  async update(entity: E): Promise<void> {
    await this.findById(entity.id)
    const index = this.items.findIndex(item => item.id === entity.id)
    this.items[index] = entity
  }

  async delete(id: string): Promise<void> {
    await this.findById(id)
    const index = this.items.findIndex(item => item.id === id)
    this.items.splice(index, 1)
  }
}
