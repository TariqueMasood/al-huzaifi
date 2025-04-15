import { useMutation } from "@tanstack/react-query";
import axios from "../utils/axios-instance";

interface AuthPayload {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: AuthPayload) => {
      const response = await axios.post("/auth/login", payload);
      return response.data;
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (payload: AuthPayload) => {
      const response = await axios.post("/auth/register", payload);
      return response.data;
    },
  });
};
