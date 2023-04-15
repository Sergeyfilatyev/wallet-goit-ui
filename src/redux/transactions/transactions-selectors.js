export const selectTransactions = (state) => state.transactions.transItems;

export const selectIsLoading = (state) => state.transactions.isLoading;

export const selectError = (state) => state.transactions.error;

export const selectBalance = (state) => state.transactions.balance;
