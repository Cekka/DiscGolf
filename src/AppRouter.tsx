import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./modules/layout/Layout";
import { AppHome } from "./modules/home/AppHome";
import { GameBoard } from "./modules/points/GameBoard";
import { PreparationGame } from "./modules/game/PreparationGame";


const router = createBrowserRouter([
  {
    path: "/",
    id: "layout",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <AppHome/>
      },
      {
        path: "home",
        element: <AppHome/>
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
        path: "game",
        element: <PreparationGame/>
      },
      {
        path: "fields",
        element: <div>choose a field to play</div>
      },
      {
        path: "table/:holes",
        element: <GameBoard/>
      }
    ],
  },
]);

export const AppRouter = () => {
  return (<RouterProvider router={router} />);
}