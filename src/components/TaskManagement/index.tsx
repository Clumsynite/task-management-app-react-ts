import { useState } from "react";
import dummyTasks from "src/tasks.json";
import { Tasks, Categories } from "src/@types/Task";
import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TaskManagement = () => {
  const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  const [tasks, setTasks] = useState<Tasks>(dummyTasks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    const oldCategory = source.droppableId as Categories;
    const newCategory = destination.droppableId as Categories;

    const newtasksObj = { ...tasks };
    if (oldCategory == newCategory) {
      const tasks = newtasksObj[oldCategory];
      const [removeTask] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, removeTask);
      newtasksObj[oldCategory] = tasks;
    } else {
      // remove from old category
      const oldtasks = newtasksObj[oldCategory];
      const [removeTask] = oldtasks.splice(source.index, 1);
      const newTasks = newtasksObj[newCategory];
      newTasks.splice(destination.index, 0, removeTask);
    }
    setTasks({ ...newtasksObj });
  };

  return (
    <div className={"text-center"}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="p-2 flex flex-row items-start">
          {categories.map((category) => (
            <TaskList category={category} tasks={tasks[category]} key={category} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskManagement;
