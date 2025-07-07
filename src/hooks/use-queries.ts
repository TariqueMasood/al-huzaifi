import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axios-instance";
import { RegistrationPayload } from "../@types/registration";

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

export const useRegistrationMutation = () => {
  return useMutation({
    mutationKey: ["registrations"],
    mutationFn: async (payload: RegistrationPayload) => {
      const response = await axiosInstance.post("/registrations", payload);
      return response.data;
    },
  });
};

// Delete registration by ID
export const useDeleteRegistration = () => {
  return useMutation({
    mutationKey: ["delete-registration"],
    mutationFn: async (id: string) => {
      const response = await axiosInstance.delete(`/registrations/${id}`);
      return response.data;
    },
  });
};
