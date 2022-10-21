import { IUserUpdate } from "../../interfaces/users";
import bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const userUpdateService = async (
  { name, email, password }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (password) {
    if (bcrypt.compareSync(password!, user.password)) {
      throw new AppError("Inform a different password", 403);
    }
  }

  await userRepository.update(id, {
    name: name ? name : user.name,
    email: email ? email : user.email,
    password: password ? bcrypt.hashSync(password!, 10) : user.password,
  });

  return true;
};

export default userUpdateService;
