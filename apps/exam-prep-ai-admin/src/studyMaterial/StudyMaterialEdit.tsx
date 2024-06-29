import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const StudyMaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="gradeLevel" source="gradeLevel" />
        <TextInput label="subject" source="subject" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
