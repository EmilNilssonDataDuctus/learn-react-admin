import { Admin, Resource } from "react-admin";
import { UserList } from "./Components/UserList/UserList";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);
