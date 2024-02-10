import useDarkMode from "@fisch0920/use-dark-mode";
import TaskManagement from "src/components/TaskManagement";
import Nav from "./components/Nav";

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <main
      id="App"
      className={`${
        darkMode.value ? "dark" : ""
      } max-w-screen min-h-screen text-foreground bg-background transition-all bg-gradient-to-r from-[#2C3E50] to-[#000000]`}
    >
      <Nav />
      <TaskManagement />
    </main>
  );
};

export default App;
