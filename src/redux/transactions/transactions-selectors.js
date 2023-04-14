
export const selectTransactions = state => state.transactionsSlice.transItems;

export const selectIsLoading = state => state.transactionsSlice.isLoading;

export const selectError = state => state.transactionsSlice.error;