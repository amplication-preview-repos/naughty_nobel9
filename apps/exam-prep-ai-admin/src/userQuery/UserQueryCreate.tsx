import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const UserQueryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="queryText" multiline source="queryText" />
        <SelectInput
          source="queryType"
          label="queryType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="response" multiline source="response" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
