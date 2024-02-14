import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import AddtaskButton from "./TaskManagement/AddtaskButton";

const Nav = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="text-lg font-bold">Task Management App</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <div className="flex flex-row items-center justify-between w-full">
          <AddtaskButton />
          <ThemeSwitcher />
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
