import instance from "./auth";

export const fetchStatistics = async () => {
  const { data } = await instance.get("/statistics");
  return data;
};
