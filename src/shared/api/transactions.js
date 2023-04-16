import instance from "./auth";

export const getAllTransactions = async () => {
  const { data } = await instance.get("/transactions");
  return data;
};

export const addTransaction = async (transaction) => {
  const { data } = await instance.post("/transactions", transaction);
  return data;
};

export const deleteTransaction = async (id) => {
  await instance.delete(`/transactions/${id}`);
};

export const updateTransaction = async (id, updatedData) => {
  const { data } = await instance.patch(`/transactions/${id}`, updatedData);
  return data;
};
