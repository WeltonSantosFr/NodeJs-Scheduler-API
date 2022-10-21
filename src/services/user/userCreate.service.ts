import { User } from "./../../entities/user.entity";
import { IUserRequest } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";
import bcrypt from "bcryptjs";
import AppError from "../../errors/AppError";

const userCreateService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user) {
    throw new AppError("User Already exists", 400);
  }

  const newUser = new User();
  (newUser.name = name),
    (newUser.email = email),
    (newUser.password = bcrypt.hashSync(password, 10)),
    (newUser.isAdm = isAdm),
    userRepository.create(newUser);

  await userRepository.save(newUser);

  return { ...newUser, password: undefined };
};

export default userCreateService;
