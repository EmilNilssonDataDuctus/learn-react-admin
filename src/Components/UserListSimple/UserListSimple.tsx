import { List, SimpleList } from "react-admin";

export const UserListSimple = () => (
  <List>
    <SimpleList
      primaryText={(record) => record.name}
      secondaryText={(record) => record.username}
      tertiaryText={(record) => record.email}
    />
  </List>
);
