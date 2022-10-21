import { Properties } from "../../entities/properties.entity";
import AppDataSource from "../../data-source";

const propertiesListService = async () => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const properties = await propertyRepository.find();

  return properties;
};

export default propertiesListService;
