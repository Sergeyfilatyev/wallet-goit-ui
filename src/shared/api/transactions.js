import instance from "./auth";

export const getAllTransactions = async () => {
  const { data } = await instance.get("/transactions");
  return data;
};

export const addTransaction = async (data) => {
  return await instance.post("/transactions", data);
};

export const deleteTransaction = async (id) => {
  return await instance.delete(`/transactions/${id}`);
};

export const updateTransaction = async ({
  id,
  type,
  category,
  comment,
  amount,
}) => {
  const { data } = await instance.patch(`/transactions/${id}`, {
    type,
    category,
    comment,
    amount,
  });
  return data;
};
