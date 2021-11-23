import repositoryApi from "apis/repositoryApi";
import Repository, {
  RepositoryActionTypes,
  SearchRepositoryStartAction,
  SearchRepositorySuccessAction,
  SearchRepositoryFailAction,
  RepositoryActionCreator,
} from "model/Repository";
import { Dispatch } from "react";

const searchRepositoryStart = (): SearchRepositoryStartAction => {
  return { type: RepositoryActionTypes.SEARCH_REPOSITORY_START };
};

const searchRepositorySuccess = (
  repositories: Repository[],
  total: number
): SearchRepositorySuccessAction => {
  return {
    type: RepositoryActionTypes.SEARCH_REPOSITORY_SUCCESS,
    payload: { repositories, total },
  };
};

const searchRepositoryFail = (err: Error): SearchRepositoryFailAction => {
  return {
    type: RepositoryActionTypes.SEARCH_REPOSITORY_FAIL,
    payload: err.message,
  };
};

export const searchRepository = (term: string) => {
  return async (dispatch: Dispatch<RepositoryActionCreator>) => {
    dispatch(searchRepositoryStart());
    try {
      const params = {
        text: term,
      };
      const {
        data: { objects, total },
      } = await repositoryApi.searchRepository(params);

      const repositories: Repository[] = objects.map(
        (repo: {
          package: any;
          score: any;
          searchScore: number;
        }): Repository => {
          const { package: packageRepo, score, searchScore } = repo;
          return {
            package: {
              name: packageRepo.name,
              version: packageRepo.version,
              description: packageRepo.description,
              links: { npm: packageRepo.links.npm },
              publisher: packageRepo.publisher,
              maintainers: [...packageRepo.maintainers],
            },
            score: {
              final: score.final,
            },
            searchScore: searchScore,
          };
        }
      );
      dispatch(searchRepositorySuccess(repositories, total));
    } catch (err) {
      dispatch(searchRepositoryFail(err as Error));
      // if (err instanceof Error)
      //   dispatch({
      //     type: RepositoryActionTypes.SEARCH_REPOSITORY_FAIL,
      //     payload: err.message,
      //   });
    }
  };
};
