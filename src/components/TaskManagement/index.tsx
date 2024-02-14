import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { getTasks, onDragEnd } from "src/reducers/tasks";

const TaskManagement = () => {
  // const categories: Categories[] = ["ADDED", "STARTED", "COMPLETED"];
  const tasks = useAppSelector(getTasks);
  const dispatch = useAppDispatch();

  const handleDragEnd = (result: DropResult) => dispatch(onDragEnd(result));

  return (
    <div className={"text-center"}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="p-2 flex flex-row items-start">
          {/* {categories.map((category) => (
            <TaskList category={category} tasks={tasks[category]} key={category} />
          ))} */}
          {/* {Object.keys(tasks).map((category) => (
            <TaskList category={category as Categories} tasks={tasks[category as Categories]} key={category} />
          ))} */}
          <TaskList category={"ADDED"} tasks={tasks.ADDED} key={"ADDED"} />
          <TaskList category={"STARTED"} tasks={tasks.STARTED} key={"STARTED"} />
          <TaskList category={"COMPLETED"} tasks={tasks.COMPLETED} key={"COMPLETED"} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskManagement;
