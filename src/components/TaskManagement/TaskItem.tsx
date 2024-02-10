import { Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import moment from "moment";
import { Colors, Priority, TaskItemType } from "src/@types/Task";
import { formatTimestamp, priorityColor } from "../../utility/helper";
import { Tooltip } from "../Common";

const toNow = (timestamp: string) => moment(timestamp).toNow();

const Timestamp = ({ timestamp, title }: { timestamp: string; title: string }) =>
  timestamp ? (
    <Tooltip showArrow content={formatTimestamp(timestamp)}>
      <div className="text-xs ">
        {title} {toNow(timestamp)}
      </div>
    </Tooltip>
  ) : null;

const TaskItem = ({
  // id,
  title,
  // description,
  createdAt,
  updatedAt,
  category,
  priority,
  completeTill,
  completedAt,
}: TaskItemType) => {
  return (
    <Card className="p-2 mb-2 rounded-md bg-foreground text-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg">
      <CardHeader className="top-1 flex-col !items-start">
        <div className="text-tiny uppercase font-bold">{title}</div>
      </CardHeader>
      <CardFooter className="border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="text-start">
          <Timestamp timestamp={createdAt} title="Created At: " />
          <Timestamp timestamp={updatedAt} title="Updated At: " />
          {category === "COMPLETED" ? (
            <Timestamp timestamp={completedAt} title="Completed At: " />
          ) : (
            <Timestamp timestamp={completeTill} title="Complete Till: " />
          )}
        </div>
        <div>
          <Chip className="capitalize" color={priorityColor[priority as Priority] as Colors}>
            {priority.toLowerCase()}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskItem;
