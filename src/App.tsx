import useDarkMode from "@fisch0920/use-dark-mode";
import TaskManagement from "src/components/TaskManagement";
import Nav from "./components/Nav";

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <main
      id="App"
      className={`${darkMode.value ? "dark" : ""} w-screen h-screen text-foreground bg-background transition-all`}
    >
      <Nav />
      <TaskManagement />
    </main>
  );
};

export default App;
