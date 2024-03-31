import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '188edac0b7msh914b21d4bb9b5e7p1cca81jsn4d8d4ebcc966',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
});

class ClientApi {
  // eslint-disable-next-line class-methods-use-this
  getAll = <T>(requestConfig: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>('/v1/cars', requestConfig)
      .then(({ data }) => data);
  };
}

export default new ClientApi();
