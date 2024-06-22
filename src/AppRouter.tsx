import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./modules/layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    id: "layout",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <div>Home</div>
      },
      {
        path: "home",
        element: <div>Home</div>
      },
      {
        path: "frisbee-types",
        element: <div>Type of frisbee</div>
      },
      {
        path: "how-to-play",
        element: <div>how-to-play</div>
      },
      {
        path: "points",
        element: <div>points in your game</div>
      },
      {
        path: "fields",
        element: <div>choose a field to play</div>
      }
    ],
  },
]);

export const AppRouter = () => {
  return (<RouterProvider router={router} />);
}