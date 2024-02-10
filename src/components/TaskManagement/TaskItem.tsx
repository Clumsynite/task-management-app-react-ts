import { Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import type { TaskItemType } from "src/@types/TaskItem";
import { categoryColor } from "./util";
import { CategoryColors } from "src/@types/TaskCategory";

const TaskItem = ({ id, category, createdAt, description, title, updatedAt }: TaskItemType) => {
  return (
    <Card className="p-2 mb-4 rounded-md break-inside  bg-foreground bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <CardHeader className="top-1 flex-col !items-start">
        <div className="text-tiny uppercase font-bold">{title}</div>
        {/* <h4 className="font-medium text-large">{description}</h4> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">{description}</CardBody>
      <CardFooter className="border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <div className={"text-black text-tiny capitalize "}>
            <Chip color={categoryColor[category] as CategoryColors}>{category}</Chip>
          </div>
        </div>
        {/* <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default TaskItem;
