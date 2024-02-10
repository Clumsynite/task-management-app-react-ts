import useDarkMode from "@fisch0920/use-dark-mode";
import TaskManagement from "src/components/TaskManagement";
import Nav from "./components/Nav";
import { gradients } from "./utility/helper";

const App = () => {
  const darkMode = useDarkMode(false);
  const bgGradient = darkMode.value ? gradients.dark : gradients.light;

  return (
    <main
      id="App"
      className={`${
        darkMode.value ? "dark" : ""
      } max-w-screen min-h-screen text-foreground bg-background transition-all `}
      style={{
        background: `linear-gradient(90deg, ${bgGradient.from}, ${bgGradient.to})`,
      }}
    >
      <Nav />
      <TaskManagement />
    </main>
  );
};

export default App;
