import db from "../../config/db";

const getExampleResources = async () => {
  return db("exampleResources").select(
    "exampleResources.id",
    "exampleResources.title"
  );
};

export default getExampleResources;
