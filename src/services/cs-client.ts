import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  totalResults: number;
  next: string | null;
  items: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://pba371.saas.contentserv.com/admin/rest',
  params: {
    f: 'json'
  },  
  timeout: 5000,
  timeoutErrorMessage: 'Timed out',
});

class CSClient<T> {
  endpoint: string;

  constructor(endpoint: string, query?: string[]) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data);
  } 

  get = (id: number | string ) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id ).then(res => res.data);
  }
}

export default CSClient;


