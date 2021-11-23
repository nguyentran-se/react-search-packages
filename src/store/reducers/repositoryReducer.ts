import { RepositoryActionCreator, RepositoryState } from "model/Repository";

const initialState: RepositoryState = {
  repositories: [],
  loading: false,
  error: null,
  total: 0,
};

const repositoryReducer = (
  state = initialState,
  action: RepositoryActionCreator
): RepositoryState => {
  switch (action.type) {
    case "SEARCH_REPOSITORY_START":
      return { ...state, loading: true, error: null };
    case "SEARCH_REPOSITORY_SUCCESS":
      return {
        ...state,
        repositories: action.payload.repositories,
        loading: false,
        total: action.payload.total,
      };
    case "SEARCH_REPOSITORY_FAIL":
      return {
        ...state,
        repositories: [],
        loading: false,
        error: action.payload,
        total: 0,
      };
    default:
      return state;
  }
};

export default repositoryReducer;
