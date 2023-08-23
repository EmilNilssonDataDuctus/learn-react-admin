import { Admin, Resource } from "react-admin";
import { PostsList } from "./Components/PostsList/PostsList";
import { ResponsiveList } from "./Components/ResponsiveList/ResponsiveList";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={PostsList} />
    <Resource name="users" list={ResponsiveList} recordRepresentation="name" />
  </Admin>
);
