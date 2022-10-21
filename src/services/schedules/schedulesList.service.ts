import { Schedule } from "../../entities/schedules_user_properties.entity";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";

const schedulesListService = async (id: string) => {
  const schedulesRepository = AppDataSource.getRepository(Schedule);

  const schedules = await schedulesRepository.find({
    where: { property: { id } },
    relations: { user: true },
  });

  if (schedules.length === 0) {
    throw new AppError("Invalid Id", 404);
  }

  return schedules;
};

export default schedulesListService;
