import { IRepository } from '@/shared/domain/repositories/repository-contracts'
import { UserEntity } from '../entities/user.entity'

export interface UserRepository extends IRepository<UserEntity> {
  findByEmail(id: string): Promise<UserEntity>
  emailExists(email: string): Promise<void>
}
