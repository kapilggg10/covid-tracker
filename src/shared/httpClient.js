import axios from "axios";
let config = {
  baseURL: "https://api.covid19api.com",
};

/** Creating the instance for axios */
const httpClient = axios.create(config);

/** Adding the request interceptors */
httpClient.defaults.withCredentials = false;
/** Adding the response interceptors */
httpClient.interceptors.response.use(
  (response) => {
    /** TODO: Add any response interceptors */
    return Promise.resolve(response.data);
  },
  (error) => {
    /** TODO: Do something with response error */
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized");
    }
    return Promise.reject(error.response);
  }
);

export { httpClient };
