import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "../constants/index";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const jwtToken = await AsyncStorage.getItem("token");
  const token = `Bearer ${jwtToken}`;
  config.headers.Authorization = token;
  return config;
});
