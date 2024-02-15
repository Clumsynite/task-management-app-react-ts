import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { getTasks, onDragEnd } from "src/reducers/tasks";
import TaskGenerator from "./TaskGenerator";

const TaskManagement = () => {
  const tasks = useAppSelector(getTasks);
  const dispatch = useAppDispatch();

  const handleDragEnd = (result: DropResult) => dispatch(onDragEnd(result));

  const isTaskEmpty = () => !tasks.ADDED.length && !tasks.STARTED.length && !tasks.COMPLETED.length;

  return (
    <div className={"text-center"}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="p-2 flex flex-row items-start">
          <TaskList category={"ADDED"} tasks={tasks.ADDED} key={"ADDED"} />
          <TaskList category={"STARTED"} tasks={tasks.STARTED} key={"STARTED"} />
          <TaskList category={"COMPLETED"} tasks={tasks.COMPLETED} key={"COMPLETED"} />
        </div>
      </DragDropContext>
      {isTaskEmpty() && <TaskGenerator />}
    </div>
  );
};

export default TaskManagement;
