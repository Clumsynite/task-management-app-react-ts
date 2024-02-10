import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

const Nav = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="text-lg font-bold">Task Management App</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
