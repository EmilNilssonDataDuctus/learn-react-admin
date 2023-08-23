import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const PostsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);
