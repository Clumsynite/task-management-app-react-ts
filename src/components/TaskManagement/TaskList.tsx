import { Categories, Colors, TaskItemType } from "src/@types/Task";
import TaskItem from "./TaskItem";
import { categoryColor } from "src/utility/helper";
import { Droppable } from "react-beautiful-dnd";

interface TaskListProps {
  category: Categories;
  tasks: TaskItemType[];
}

const TaskList = ({ category, tasks }: TaskListProps) => {
  // console.log(category, visibleTasks.length);
  const color = categoryColor[category as Categories] as Colors;

  return (
    <Droppable droppableId={category} key={category}>
      {(provided) => (
        <div className="flex-[1]" {...provided.droppableProps} ref={provided.innerRef}>
          <div className={`p-2 mx-1  bg-background rounded-md `}>
            <div
              className={`capitalize my-2 text-${color} text-2xl p-2 rounded-md bg-foreground bg-opacity-10 backdrop-blur-lg drop-shadow-lg`}
            >
              {category.toLowerCase()}
            </div>
            <div className="">
              {tasks.map((task, index) => (
                <TaskItem {...task} index={index} key={task.id} category={category} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
