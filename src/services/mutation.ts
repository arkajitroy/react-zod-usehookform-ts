import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TSchema } from "../@types/schemas/ZSchemas";
import { addNewUserAPI, editUserAPI } from "./api";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payloadData: TSchema) => addNewUserAPI(payloadData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      alert("User has been created successfully!");
    },
  });
};

export const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payloadData: TSchema) => editUserAPI(payloadData),
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      if (variables.variant === "edit") {
        await queryClient.invalidateQueries({ queryKey: ["user", { id: variables.id }] });
      }
      alert("User has been created successfully!");
    },
  });
};
