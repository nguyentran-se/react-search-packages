//response from api
interface RepositoryUser {
  username: string;
  email: string;
}
export default interface Repository {
  package: {
    name: string;
    version: string;
    description: string;
    links: {
      npm: string;
    };
    publisher: RepositoryUser;
    maintainers: RepositoryUser[];
  };
  score: {
    final: number;
  };
  searchScore: number;
}

//reducer
export interface RepositoryState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  total: number;
}
//action types
export enum RepositoryActionTypes {
  SEARCH_REPOSITORY_START = "SEARCH_REPOSITORY_START",
  SEARCH_REPOSITORY_SUCCESS = "SEARCH_REPOSITORY_SUCCESS",
  SEARCH_REPOSITORY_FAIL = "SEARCH_REPOSITORY_FAIL",
}
//action creator
export interface SearchRepositoryStartAction {
  type: RepositoryActionTypes.SEARCH_REPOSITORY_START;
}

export interface SearchRepositorySuccessAction {
  type: RepositoryActionTypes.SEARCH_REPOSITORY_SUCCESS;
  payload: { repositories: Repository[]; total: number };
}

export interface SearchRepositoryFailAction {
  type: RepositoryActionTypes.SEARCH_REPOSITORY_FAIL;
  payload: string;
}

export type RepositoryActionCreator =
  | SearchRepositoryStartAction
  | SearchRepositorySuccessAction
  | SearchRepositoryFailAction;
