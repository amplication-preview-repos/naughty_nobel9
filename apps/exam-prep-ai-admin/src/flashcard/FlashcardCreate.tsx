import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FlashcardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="gradeLevel" source="gradeLevel" />
        <TextInput label="subject" source="subject" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
