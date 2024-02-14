import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import AddtaskButton from "./TaskManagement/AddtaskButton";

const Nav = () => {
  // return (
  //   <nav className="flex z-40 w-full items-center justify-center sticky top-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70 h-16">
  //     <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-5xl">
  //       <div className="flex flex-row flex-grow justify-start bg-transparent ">
  //         <p className="text-lg font-bold">Task Management App</p>
  //       </div>
  //       <div>
  //         <ThemeSwitcher />
  //       </div>
  //     </header>
  //   </nav>
  // );
  return (
    <Navbar>
      <NavbarBrand>
        <p className="text-lg font-bold">Task Management App</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <div className="px-4">
          <AddtaskButton />
        </div>
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
