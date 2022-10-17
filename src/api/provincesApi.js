import axiosClient from "./";

const ProvincesApi = {
  getList(depth = 1) {
    const url = `?depth=${depth}`;
    return axiosClient.get(url);
  },
};

export default ProvincesApi;
