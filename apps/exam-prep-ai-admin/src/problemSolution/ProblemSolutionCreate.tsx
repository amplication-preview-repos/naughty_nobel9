import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProblemSolutionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="gradeLevel" source="gradeLevel" />
        <TextInput label="problemText" multiline source="problemText" />
        <TextInput label="solutionText" multiline source="solutionText" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
