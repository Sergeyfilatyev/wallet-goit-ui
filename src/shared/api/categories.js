import instance from "./auth";

export const fetchCategories = async () => {
    const {data} = await instance.get("/categories");
    return data;
  };