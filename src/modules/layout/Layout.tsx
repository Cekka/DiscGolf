import { Outlet } from "react-router-dom"
import { AppHeader } from "./AppHeader"

export const Layout = () => {

  return (
    <>
      <AppHeader/>
      <Outlet/>
    </>
  )
}