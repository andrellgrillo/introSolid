import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const existEmail = this.usersRepository.findByEmail(email)
    if (existEmail) {
      throw new Error("Mensagem de erro")
    }
    return this.usersRepository.create({ email, name })
  }
}

export { CreateUserUseCase };
