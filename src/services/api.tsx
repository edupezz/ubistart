import axios, { AxiosRequestConfig } from "axios";

const conection = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
})

export function Get(url: string) {
    return conection.get(url);
}