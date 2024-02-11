import { Draggable as ReactDraggable, DraggableProps } from "react-beautiful-dnd";
import TaskItem from "../TaskManagement/TaskItem";
import { TaskItemType } from "src/@types/Task";

interface Props extends DraggableProps {
  id: string;
  item: TaskItemType;
}

const Draggable = ({ id, item, index }: Props) => {
  return (
    <ReactDraggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item">
          <TaskItem {...item} />
        </div>
      )}
    </ReactDraggable>
  );
};

export default Draggable;
