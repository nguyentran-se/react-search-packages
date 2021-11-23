import { RootState } from "store/reducers";

export const selectRepositories = (state: RootState) => state.repo.repositories;
export const selectLoading = (state: RootState) => state.repo.loading;
export const selectError = (state: RootState) => state.repo.error;
export const selectTotal = (state: RootState) => state.repo.total;
