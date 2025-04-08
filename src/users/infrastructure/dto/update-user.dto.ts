import { UpdateUserUseCase } from '@/users/application/usecases/updateUser.usecase'

export class UpdateUserDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  name: string
}
