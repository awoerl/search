import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, CSPIN } from "./config";

export interface FetchResponse<T> {
  totalResults: number;
  next: string | null;
  items: T[];
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    f: "json",
    CSPIN: CSPIN,
  },
  timeout: 5000,
  timeoutErrorMessage: "Timed out",
});

class CSClient<T> {
  endpoint: string;

  constructor(endpoint: string, query?: string[]) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default CSClient;
