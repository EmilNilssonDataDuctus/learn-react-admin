import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Admin, Resource } from "react-admin";
import MyLoginPage from "./Components/Custom/MyLoginPage/MyLoginPage";
import { PostCreate } from "./Components/PostCreate/PostCreate";
import { PostEdit } from "./Components/PostEdit/PostEdit";
import { PostShow } from "./Components/PostShow/PostShow";
import { PostsList } from "./Components/PostsList/PostsList";
import { ResponsiveList } from "./Components/ResponsiveList/ResponsiveList";
import { UserShow } from "./Components/UserDetails/UserDetails";
import { DashBoard } from "./DashBoard/DashBoard";
import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
    dashboard={DashBoard}
  >
    <Resource
      name="posts"
      list={PostsList}
      edit={PostEdit}
      show={PostShow}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      show={UserShow}
      list={ResponsiveList}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);
