import { SigninUseCase } from '@/users/application/usecases/signin.usecase'

export class SignInDto implements SigninUseCase.Input {
  email: string
  password: string
}
