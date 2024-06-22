import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { NavLink, useLocation } from "react-router-dom"
import { NavBarUrl } from "./Types";

export const AppHeader = () => {

  const location = useLocation();
  const currentUrl = location.pathname.slice(1);

  const isNavBarItemActive = (navBarItemUrl:NavBarUrl):boolean => {
    if (currentUrl === navBarItemUrl) {return true;}
    return false;
  }

  return (
    <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">DISC GOLF</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={isNavBarItemActive(NavBarUrl.home)}>
            <NavLink to={NavBarUrl.home}>
              Home
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={isNavBarItemActive(NavBarUrl.frisbeeTypes)}>
            <NavLink to={NavBarUrl.frisbeeTypes}>
              Frisbee
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={isNavBarItemActive(NavBarUrl.howToPlay)}>
            <NavLink  to={NavBarUrl.howToPlay}>
              How to play
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={isNavBarItemActive(NavBarUrl.points)}>
            <NavLink  to={NavBarUrl.points}>
              Points
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive={isNavBarItemActive(NavBarUrl.fields)}>
            <NavLink  to={NavBarUrl.fields}>
              Find fields
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  )
}