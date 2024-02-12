import { useEffect } from "react";
import dummyTasks from "src/tasks.json";
import { Tasks, Categories, TaskItemType } from "src/@types/Task";
import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { getTasks, onDragEnd, setTasks } from "src/reducers/tasks";

const TaskManagement = () => {
  const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  // const [tasks, setTasks] = useState<Tasks>(dummyTasks);
  const tasks = useAppSelector(getTasks);
  const dispatch = useAppDispatch();

  // const [intialised, setInitialised] = useState(false);

  // useEffect(() => {
  //   const localTasks = localStorage.getItem("tasks");
  //   if (localTasks) {
  //     dispatch(setTasks(JSON.parse(localTasks)));
  //   } else {
  //     dispatch(setTasks(dummyTasks));
  //   }
  // }, []);

  // const onDragEnd = (result: DropResult) => {
  //   const { source, destination } = result;
  //   if (!destination) return;
  //   if (source.droppableId === destination.droppableId && source.index === destination.index) return;
  //   const oldCategory = source.droppableId as Categories;
  //   const newCategory = destination.droppableId as Categories;

  //   const newtasksObj = JSON.parse(JSON.stringify(tasks));

  //   const updatedAt = new Date().toISOString();
  //   if (oldCategory == newCategory) {
  //     const tasks = newtasksObj[oldCategory];
  //     const [removeTask] = tasks.splice(source.index, 1);
  //     removeTask.updatedAt = updatedAt;
  //     tasks.splice(destination.index, 0, removeTask);
  //     newtasksObj[oldCategory] = tasks;
  //   } else {
  //     // remove from old category
  //     const oldtasks = newtasksObj[oldCategory];
  //     const [removeTask] = oldtasks.splice(source.index, 1);
  //     const newTasks = newtasksObj[newCategory];
  //     removeTask.updatedAt = updatedAt;
  //     newTasks.splice(destination.index, 0, removeTask);
  //   }
  //   setTasks({ ...newtasksObj });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  const handleDragEnd = (result: DropResult) => dispatch(onDragEnd(result));

  return (
    <div className={"text-center"}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="p-2 flex flex-row items-start">
          {Object.keys(tasks).map((category) => (
            <TaskList category={category as Categories} tasks={tasks[category as Categories]} key={category} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskManagement;
