import { Admin, Resource } from "react-admin";
import MyLoginPage from "./Components/Custom/MyLoginPage/MyLoginPage";
import { PostCreate } from "./Components/PostCreate/PostCreate";
import { PostEdit } from "./Components/PostEdit/PostEdit";
import { PostShow } from "./Components/PostShow/PostShow";
import { PostsList } from "./Components/PostsList/PostsList";
import { ResponsiveList } from "./Components/ResponsiveList/ResponsiveList";
import { UserShow } from "./Components/UserDetails/UserDetails";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
  >
    <Resource
      name="posts"
      list={PostsList}
      edit={PostEdit}
      show={PostShow}
      create={PostCreate}
    />
    <Resource
      name="users"
      show={UserShow}
      list={ResponsiveList}
      recordRepresentation="name"
    />
  </Admin>
);
