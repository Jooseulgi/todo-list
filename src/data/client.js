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
