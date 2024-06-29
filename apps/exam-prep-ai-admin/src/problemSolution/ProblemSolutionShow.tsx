import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ProblemSolutionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="gradeLevel" source="gradeLevel" />
        <TextField label="ID" source="id" />
        <TextField label="problemText" source="problemText" />
        <TextField label="solutionText" source="solutionText" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
