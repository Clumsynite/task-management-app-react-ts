import { Chip } from "@nextui-org/react";
import moment from "moment";
import { Categories, Colors, Priority, TaskItemType } from "src/@types/Task";
import { formatTimestamp, priorityColor } from "../../utility/helper";
import { Tooltip } from "../Common";
import { Draggable } from "react-beautiful-dnd";

const toNow = (timestamp: string) => moment(timestamp).toNow();

const Timestamp = ({ timestamp, title }: { timestamp: string; title: string }) =>
  timestamp ? (
    <Tooltip showArrow content={formatTimestamp(timestamp)}>
      <div className="text-xs ">
        {title} {toNow(timestamp)}
      </div>
    </Tooltip>
  ) : null;

interface TaskItemProps extends TaskItemType {
  index: number;
  category: Categories;
}

const TaskItem = ({
  id,
  title,
  createdAt,
  updatedAt,
  category,
  priority,
  dueDate,
  completedAt,
  index,
}: TaskItemProps) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item">
          <div className="p-2 mb-2 rounded-md bg-foreground text-white bg-opacity-50  drop-shadow-lg">
            <div className="top-1 flex-col !items-start">
              <div className="text-tiny uppercase font-bold">{title}</div>
            </div>
            <div className="border-t-1 border-zinc-100/50 z-10 flex flex-row items-center justify-between">
              <div className="text-start">
                <Timestamp timestamp={createdAt} title="Created At: " />
                <Timestamp timestamp={updatedAt} title="Updated At: " />
                {category === "COMPLETED" ? (
                  <Timestamp timestamp={completedAt} title="Completed At: " />
                ) : (
                  <Timestamp timestamp={dueDate} title="Complete Till: " />
                )}
              </div>
              <div>
                <Chip className="capitalize" color={priorityColor[priority as Priority] as Colors}>
                  {priority.toLowerCase()}
                </Chip>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
// (oldProps: TaskItemProps, newProps: TaskItemProps) => oldProps.id === newProps.id

export default TaskItem;
