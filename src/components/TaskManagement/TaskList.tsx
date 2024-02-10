import { useMemo } from "react";
import { Categories, Colors, Tasks } from "src/@types/Task";
import Draggable from "../DragAndDrop/Draggable";
import TaskItem from "./TaskItem";
import { categoryColor } from "src/utility/helper";

interface TaskListProps {
  category: Categories;
  tasks: Tasks;
}

const TaskList = ({ category, tasks }: TaskListProps) => {
  const filterTasks = (tasks: Tasks, tab: Categories) => tasks.filter((task) => task.category === tab);
  const visibleTasks = useMemo(() => filterTasks(tasks, category), [tasks, category]);
  // console.log(category, visibleTasks.length);
  const color = categoryColor[category as Categories] as Colors;

  return (
    <div className={`p-2 mx-1 drop-shadow-lg backdrop-blur-md bg-background rounded-md `}>
      <div
        className={`capitalize my-2 text-${color} text-2xl p-2 rounded-md bg-foreground bg-opacity-10 backdrop-blur-lg drop-shadow-lg`}
      >
        {category.toLowerCase()}
      </div>
      <div className="">
        {visibleTasks.map((task) => (
          <Draggable key={task.id} id={`${task.id}|${category}`}>
            <TaskItem {...task} />
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
