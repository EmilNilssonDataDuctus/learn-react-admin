import { Admin, Resource } from "react-admin";
import { UserList } from "./Components/UserList/UserList";
import { UserListSimple } from "./Components/UserListSimple/UserListSimple";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="users" list={UserListSimple} />
  </Admin>
);
