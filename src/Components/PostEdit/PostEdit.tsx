import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

// This strategy is better than simply editing in App.tsx
//   <Resource recordRepresentation="title" ... />
// Because this was we can wrap the title string with quotation marks
export const PostTitle = () => {
  const record = useRecordContext();

  // Nullcheck because record data is fetched asynchronously
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
