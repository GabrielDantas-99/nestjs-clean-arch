import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { SignupUseCase } from '../application/usecases/signup.usecase'
import { UserInMemoryRepository } from './database/in-memory/repositories/user-in-memory.repository'
import { BCryptjsHashProvider } from './providers/hash-provider/bcryptjs-hash.provider'
import { HashProvider } from '@/shared/application/providers/hash-provider'
import { UserRepository } from '../domain/repositories/user.repository'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UserRepository',
      useClass: UserInMemoryRepository,
    },
    {
      provide: 'HashProvider',
      useClass: BCryptjsHashProvider,
    },
    {
      provide: SignupUseCase.UseCase,
      useFactory: (
        userRepository: UserRepository.Repository,
        hashProvider: HashProvider,
      ) => {
        return new SignupUseCase.UseCase(userRepository, hashProvider)
      },
      inject: ['UserRepository', 'HashProvider'],
    },
  ],
})
export class UsersModule {}
