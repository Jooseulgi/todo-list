import axios from "axios";

const BASE_URL = "https://pre-onboarding-selection-task.shop";

const baseSettings = {
    baseURL: BASE_URL,
    withCredentials: false,
    timeout: 10 * 1000,
};

const axiosApi = () => {
    const instance = axios.create(baseSettings);
    return instance;
};

const axiosAuthApi = () => {
    const instance = axios.create({
        ...baseSettings,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });
    return instance;
};

export const defaultInstance = axiosApi();
export const authInstance = axiosAuthApi();

authInstance.interceptors.request.use((config) => {
    const token = `Bearer ${localStorage.getItem("access_token")}`;
    if (!config.headers || !token) return config;
    const headerToken = config.headers.Authorization;
    if (headerToken === token) return config;

    config.headers.Authorization = token;
    return config;
});
