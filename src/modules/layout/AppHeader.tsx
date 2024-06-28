import { NavLink } from "react-router-dom"
import { NavBarUrl } from "./types";


export const AppHeader = () => {

  // const location = useLocation();
  // const currentUrl = location.pathname.slice(1);

  // const isNavBarItemActive = (navBarItemUrl:NavBarUrl):boolean => {
  //   if (currentUrl === navBarItemUrl) {return true;}
  //   return false;
  // }

  return (
    <div
      // position="sticky"
    >
      <div>
        <p className="">DISC GOLF</p>
      </div>
      <div className="" >
        <div>
          <NavLink to={NavBarUrl.home}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to={NavBarUrl.frisbeeTypes}>
            Frisbee
          </NavLink>
        </div>
        <div>
          <NavLink to={NavBarUrl.howToPlay}>
            How to play
          </NavLink>
        </div>
        <div>
          <NavLink to={NavBarUrl.game}>
            Game
          </NavLink>
        </div>
        <div>
          <NavLink to={NavBarUrl.fields}>
            Find fields
          </NavLink>
        </div>
      </div>
    </div>
  )
}