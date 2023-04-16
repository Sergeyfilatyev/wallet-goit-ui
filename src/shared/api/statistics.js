import instance from "./auth";

export const fetchStatistics = async (year, month) => {
  const { data } = await instance.get(
    `/statistics?year=${year}&month=${month}`
  );
  return data;
};
