import { Navbar, NavbarBrand, NavbarContent, Avatar } from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="text-lg font-bold">Task Management App</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
