import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { authAPI } from './auth.api';
import { saveTokens } from '../helpers/saveTokens';

const clearTokens = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
};

const getTokens = () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    return { token, refreshToken };
};

export const instanceWithCredentials = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
});

const isExpired = (token: string): boolean => {
    const decode = jwtDecode<JwtPayload>(token);

    return !!decode.exp && Date.now() >= decode.exp * 1000;
};

instanceWithCredentials.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const { token, refreshToken } = getTokens();

    if (token && !isExpired(token)) {
        if (config.headers) {
            (config.headers as AxiosHeaders).set('Authorization', token);
        }
    } else if (refreshToken && !isExpired(refreshToken)) {
        try {
            const { data } = await authAPI.getNewTokens(refreshToken);
            saveTokens(data);
            if (config.headers) {
                (config.headers as AxiosHeaders).set('Authorization', data.token);
            }
        } catch (e) {}
    }
    if (config.headers && !(config.headers as AxiosHeaders).get('Authorization')) {
        clearTokens();
    }

    return config;
});
