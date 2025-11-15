import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

export function useApi() {
  const { getToken } = useAuth();

  const api = axios.create({
    baseURL: "http://localhost:4000/api/v1",
  });

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  return api;
}
