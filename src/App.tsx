import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"

export const App = () => {

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">DISC GOLF</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Frisbee
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              How to play
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Points
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Find fields
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

