import { Categories } from "../../entities/categories.entity";
import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import AppError from "../../errors/AppError";

const categoriesPropertiesListService = async (id: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const category = await categoriesRepository.findOneBy({ id });

  if (!category) {
    throw new AppError("Category does not exist.", 404);
  }

  const properties = await propertiesRepository.find({
    where: { category: category },
  });

  return { ...category, properties };
};

export default categoriesPropertiesListService;
