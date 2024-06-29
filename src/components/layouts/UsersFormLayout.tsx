import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, TSchema } from "../../@types/schemas/ZSchemas";
import { UserPage } from "..";
import { formDefaultValues } from "../../constants/defaultValues";
import { DevTool } from "@hookform/devtools";

const UsersFormLayout: React.FC = () => {
  const methods = useForm<TSchema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: formDefaultValues,
  });

  return (
    <FormProvider {...methods}>
      <UserPage />
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default UsersFormLayout;
