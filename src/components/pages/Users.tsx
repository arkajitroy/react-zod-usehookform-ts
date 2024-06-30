import React, { Fragment, useEffect } from "react";
import { SubmitHandler, useFieldArray, useFormContext, useWatch } from "react-hook-form";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { TSchema } from "../../@types/schemas/ZSchemas";
import {
  RHFAutoComplete,
  RHFCheckbox,
  RHFDateTimePicker,
  RHFRadioGroup,
  RHFSlider,
  RHFSwitch,
  RHFTextField,
  RHFToggleButtonGroup,
} from "..";
import {
  useGetAllUsers,
  useGetGenders,
  useGetLanguages,
  useGetSkills,
  useGetStates,
  useGetUser,
} from "../../services/queries";
import { useCreateUser, useEditUser } from "../../services/mutation";
import { formDefaultValues } from "../../constants/defaultValues";

const Users: React.FC = () => {
  const { watch, control, unregister, reset, setValue, handleSubmit } = useFormContext<TSchema>();

  // Field array functionality
  const { append, fields, remove, replace } = useFieldArray({
    control,
    name: "students",
  });
  const userId = useWatch({ control, name: "id" });
  const isTeacherData = useWatch({ control, name: "isTeacher" });
  const variant = useWatch({ control, name: "variant" });

  // Query APIs
  const statesQueryData = useGetStates();
  const languagesQueryData = useGetLanguages();
  const genderQueryData = useGetGenders();
  const skillsQueryData = useGetSkills();
  const usersQueryData = useGetAllUsers();
  const userQueryData = useGetUser(userId);

  // Mutation API
  const createUserMutation = useCreateUser();
  const editUserMutation = useEditUser();

  // Handle change and click events
  const handleResetFormClick = () => reset(formDefaultValues);
  const handleSwitchUserClick = (userId: string) => setValue("id", userId);
  const handleFormSubmitClick: SubmitHandler<TSchema> = (data) => {
    if (variant === "create") {
      createUserMutation.mutate(data);
    } else if (variant === "edit") {
      editUserMutation.mutate(data);
    }
  };

  // useEffects
  useEffect(() => {
    const subscription = watch((value) => console.log("form-values - watch:", value));
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (!isTeacherData) {
      replace([]);
      unregister("students");
    }
  }, [isTeacherData, replace, unregister]);

  useEffect(() => {
    if (userQueryData.data) reset(userQueryData.data);
  }, [reset, userQueryData.data]);

  return (
    <Container maxWidth="sm" component="form" onSubmit={handleSubmit(handleFormSubmitClick)}>
      <Stack sx={{ flexDirection: "row", gap: 2 }}>
        <List subheader={<ListSubheader>Users</ListSubheader>}>
          {usersQueryData.data?.map((user) => (
            <ListItem key={user.id} disablePadding>
              <ListItemButton
                onClick={() => handleSwitchUserClick(user.id)}
                selected={userId === user.id}
              >
                <ListItemText primary={user.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Stack sx={{ gap: 2 }}>
          <RHFTextField<TSchema> name="name" label="Username" />
          <RHFTextField<TSchema> name="email" label="Email Address" />
          <RHFAutoComplete<TSchema> name="states" label="States" options={statesQueryData.data} />
          <RHFToggleButtonGroup<TSchema> name="languagesSpoken" options={languagesQueryData.data} />
          <RHFRadioGroup<TSchema> name="gender" label="Gender" options={genderQueryData.data} />
          <RHFCheckbox<TSchema> name="skills" label="Skills" options={skillsQueryData.data} />
          <RHFDateTimePicker<TSchema>
            name="formerEmploymentPeriod"
            label="Registration Date & Time"
          />
          <RHFSlider<TSchema> name="salaryRange" label="Salary Range" />
          <RHFSwitch<TSchema> name="isTeacher" label="Are you a Teacher" />
          {isTeacherData && (
            <Button onClick={() => append({ name: "" })} type="button">
              Add new student
            </Button>
          )}
          {fields.map((field, index) => (
            <Fragment key={field.id}>
              <RHFTextField<TSchema> name={`students.${index}.name`} label={field.name} />
              <Button type="button" variant="contained" color="error" onClick={() => remove(index)}>
                Remove
              </Button>
            </Fragment>
          ))}

          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button variant="contained" color="warning" type="submit">
              {variant === "create" ? "New user" : "Edit user"}
            </Button>
            <Button onClick={handleResetFormClick}>Reset</Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Users;
