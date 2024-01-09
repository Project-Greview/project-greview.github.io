// MODULE
import { createBrowserRouter } from "react-router-dom";
// COMPONENT
import UserRouter from "./UserRouter";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Main from "../pages/Main";
import SearchLocation from "../pages/SearchLocation";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "main",
        element: (
          // <UserRouter>
          <Main />
          // </UserRouter>
        ),
      },
      {
        path: "mylocation",
        element: (
          // <UserRouter>
          <SearchLocation />
          // </UserRouter>
        ),
      },
    ],
  },
]);

export default Routers;
