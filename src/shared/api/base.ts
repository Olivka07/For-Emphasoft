import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from '../config/index';

class ApiInstance {
    public axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: API_URL,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.axios.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Token ${localStorage.getItem('token')}`;
            }
            return config;
        });
    }

    async get<T>(
        endpoint: string,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.axios.get(
                endpoint,
                options
            );
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    async post<T>(
        endpoint: string,
        data: any,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response = await this.axios.post(endpoint, data, options);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    async put<T>(
        endpoint: string,
        data: any,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response = await this.axios.put(endpoint, data, options);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    async patch<T>(
        endpoint: string,
        data: any,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response = await this.axios.patch(endpoint, data, options);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    async delete<T>(
        endpoint: string,
        options: AxiosRequestConfig = {}
    ): Promise<T> {
        try {
            const response = await this.axios.delete(endpoint, options);
            return response.data;
        } catch (e) {
            throw e;
        }
    }
}

export const apiInstance = new ApiInstance();
