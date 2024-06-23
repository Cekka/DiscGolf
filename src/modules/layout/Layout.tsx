import { Outlet } from "react-router-dom"
import { AppHeader } from "./AppHeader"

export const Layout = () => {

  return (
    <div>
      <AppHeader/>
      <Outlet/>
    </div>
  )
}