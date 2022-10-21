import bcrypt from "bcryptjs";
import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("Wrong email/password", 403);
  }
  if (!bcrypt.compareSync(password, user!.password)) {
    throw new AppError("Wrong email/password", 403);
  }
  const token = jwt.sign(
    { email: email, isAdm: user.isAdm, id: user.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export default userLoginService;
