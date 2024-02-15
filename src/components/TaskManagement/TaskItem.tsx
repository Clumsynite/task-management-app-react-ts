import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import moment from "moment";
import { Categories, Colors, Priority, TaskItemType } from "src/@types/Task";
import { formatTimestamp, priorityColor } from "../../utility/helper";
import { Tooltip } from "../Common";
import { Draggable } from "react-beautiful-dnd";
import { DeleteTaskButton, EditTaskButton, ViewTaskButton } from "./TaskButtons";

const toNow = (timestamp: string) => moment(timestamp).fromNow();

const Timestamp = ({ timestamp, title }: { timestamp: string; title: string }) =>
  timestamp ? (
    <Tooltip showArrow content={formatTimestamp(timestamp)}>
      <div className="text-xs py-1">
        {title} <strong>{toNow(timestamp)}</strong>
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
  description,
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
          <div className="p-2 mb-2 rounded-md bg-foreground text-foreground bg-opacity-10 drop-shadow-lg">
            <div className="flex flex-row items-center p-2">
              <div className="text-base uppercase font-bold flex-[1]">{title}</div>
              <div className="pl-4">
                <ViewTaskButton
                  category={category}
                  task={{ id, completedAt, createdAt, description, dueDate, priority, title, updatedAt }}
                />
              </div>
              <div className="px-4">
                <EditTaskButton
                  category={category}
                  task={{ id, completedAt, createdAt, description, dueDate, priority, title, updatedAt }}
                />
              </div>
              <div>
                <DeleteTaskButton category={category} index={index} />
              </div>
            </div>
            <div className="border-t-1 border-zinc-100/50 p-4">
              <div className="text-sm  text-start font-light">
                {description.length > 240 ? `${description.slice(0, 240)} ......` : description}
              </div>
            </div>
            <div className="border-t-1 border-zinc-100/50 flex flex-row items-center justify-between p-2">
              <div className="flex-[8]">
                <Accordion fullWidth>
                  <AccordionItem aria-label="Timestamps" title="Timestamps" isCompact>
                    <div className="text-start">
                      <Timestamp timestamp={createdAt} title="Created " />
                      <Timestamp timestamp={updatedAt} title="Updated " />
                      {category === "COMPLETED" && completedAt ? (
                        <Timestamp timestamp={completedAt} title="Completed " />
                      ) : (
                        <Timestamp timestamp={dueDate} title="Due  " />
                      )}
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="flex-[2] text-right">
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

export default TaskItem;
