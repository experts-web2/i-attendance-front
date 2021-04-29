import axios from "axios";
import { axiosInstance } from "./axios";

export const signup = (data: any) => {
  const url = "/user/sign-up";
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, data)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

export const login = (data: any) => {
  const url = "/user/login";
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, data)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
};
export const getCentersByCity =(id:any)=>{
  const url = `/center?city=${id}`;
  return new Promise((resolve ,reject)=>{
    axiosInstance
    .get(url).then((response)=> resolve(response)).catch((err)=>reject(err))
  })
}

export const getCities =()=>{
  const url ="/city";
  return new Promise ((resolve ,reject)=>{
      axiosInstance
      .get(url)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  })
}
