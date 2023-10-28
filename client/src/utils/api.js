import axios from 'axios';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
});

export const getAllProperties  = async () => {
    try {
        const response = await api.get('/residency/allresd',{
            timeout: 10 * 1000,
        });
        if (response.status === 400 || response.status === 500) {
            throw response.data;
    }
    return response.data;
    }
    catch (error) {
        toast.error(error.message);
        throw error;
    }
};