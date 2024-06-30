import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TSchema } from "../@types/schemas/ZSchemas";
import { addNewUserAPI } from "./api";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payloadData: TSchema) => await addNewUserAPI(payloadData),
    onSuccess: async () => await queryClient.invalidateQueries({ queryKey: [""] }),
  });
};
