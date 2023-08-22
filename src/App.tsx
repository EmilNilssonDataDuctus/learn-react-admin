import { Admin, Resource } from "react-admin";
import { ResponsiveList } from "./Components/ResponsiveList/ResponsiveList";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={ResponsiveList} />
  </Admin>
);
