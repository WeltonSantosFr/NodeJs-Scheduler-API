import { Categories } from "../../entities/categories.entity";
import AppDataSource from "../../data-source";

const categoriesListService = async () => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.find();

  return category;
};

export default categoriesListService;
