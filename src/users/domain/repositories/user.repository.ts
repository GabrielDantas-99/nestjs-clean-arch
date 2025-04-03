import { UserEntity } from '../entities/user.entity'
import { ISearchableRepository } from '@/shared/domain/repositories/searchable-repository-contracts'

export interface UserRepository
  extends ISearchableRepository<UserEntity, any, any> {
  findByEmail(id: string): Promise<UserEntity>
  emailExists(email: string): Promise<void>
}
