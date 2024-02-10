import { useMemo } from "react";
import { Tasks } from "src/@types/Task";
import { Categories } from "src/@types/TaskCategory";

interface TaskListProps {
  category: Categories;
  tasks: Tasks;
}

const TaskList = ({ category, tasks }: TaskListProps) => {
  const filterTasks = (tasks: Tasks, tab: Categories) => tasks.filter((task) => (task.category as Categories) === tab);

  const visibleTasks = useMemo(() => filterTasks(tasks, selectedTab), [tasks, selectedTab]);

  return <div></div>;
};

export default TaskList;
