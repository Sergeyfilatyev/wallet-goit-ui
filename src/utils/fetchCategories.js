import axios from "axios";

export const fetchCategories = async (token) => {
  try {
    const {
      data: { data },
    } = await axios.get("http://localhost:3030/api/categories", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
