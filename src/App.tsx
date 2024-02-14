import TaskManagement from "src/components/TaskManagement";
import Nav from "./components/Nav";
import { gradients } from "./utility/helper";
import { useAppSelector } from "./hooks";
import { isDarkMode } from "./reducers/darkMode";
import TaskModal from "./components/TaskManagement/TaskModal";

const App = () => {
  const darkMode = useAppSelector(isDarkMode);
  const bgGradient = darkMode ? gradients.dark : gradients.light;

  return (
    <main
      id="App"
      className={`${darkMode ? "dark" : ""} max-w-screen- min-h-screen text-foreground bg-background transition-all `}
      style={{
        background: `linear-gradient(90deg, ${bgGradient.from}, ${bgGradient.to})`,
      }}
    >
      <Nav />
      <TaskManagement />
      <TaskModal />
    </main>
  );
};

export default App;
