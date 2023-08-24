import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";
import { PostTitle } from "../PostEdit/PostEdit";

export const PostShow = () => (
  <Show title={<PostTitle />}>
    <SimpleShowLayout>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
);
