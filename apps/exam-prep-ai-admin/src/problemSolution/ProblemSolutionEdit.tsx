import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProblemSolutionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="gradeLevel" source="gradeLevel" />
        <TextInput label="problemText" multiline source="problemText" />
        <TextInput label="solutionText" multiline source="solutionText" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};
