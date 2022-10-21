import { Categories } from "../../entities/categories.entity";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

const categoryCreateService = async ({ name }: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOneBy({ name });

  if (category) {
    throw new AppError("Category Already Exists", 400);
  }

  const newCategory = new Categories();
  newCategory.name = name;

  await categoryRepository.save(newCategory);

  return newCategory;
};

export default categoryCreateService;
