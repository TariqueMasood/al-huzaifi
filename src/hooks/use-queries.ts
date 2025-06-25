import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios-instance";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/users");
      return response.data;
    },
  });
};

export const useRegistrations = () => {
  return useQuery({
    queryKey: ["registrations"],
    queryFn: async () => {
      const response = await axiosInstance.get("/registrations");
      return response.data;
    },
  });
};
