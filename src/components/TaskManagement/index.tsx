import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core";
import { useState } from "react";
import Droppable from "../DragAndDrop/Droppable";
import dummyTasks from "src/tasks.json";
import { Tasks, Categories } from "src/@types/Task";
import TaskList from "./TaskList";

const TaskManagement = () => {
  const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  const [tasks, setTasks] = useState<Tasks>(dummyTasks.slice(0, 100));

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    if (over && event.active) {
      const newCategory = over.id;
      const elemId = event.active.id as string;
      const [id, oldCategory] = elemId.split("|");
      if (oldCategory === newCategory) return;
      const clonedtasks = Array.from(tasks);
      const taskIndex = clonedtasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) return;
      clonedtasks[taskIndex].category = newCategory as Categories;
      console.log({ taskIndex, newCategory, oldCategory });
      setTasks([...clonedtasks]);
    }
  };

  return (
    <div className={"text-center"}>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
        <div className="p-2 flex flex-row items-start">
          {categories.map((category) => (
            <Droppable id={category} key={category} className="flex-[1]">
              <TaskList category={category} tasks={tasks} />
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default TaskManagement;
