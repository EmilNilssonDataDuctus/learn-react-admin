import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostsList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);
