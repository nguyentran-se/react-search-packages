import axiosClient from "./axiosClient";

const repositoryApi = {
  searchRepository: (params: any) => {
    return axiosClient.get("search", { params });
  },
};

export default repositoryApi;
