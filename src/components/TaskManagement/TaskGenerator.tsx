import { Button, Card, CardBody } from "@nextui-org/react";
import { useAppDispatch } from "src/hooks";
import { setTasks } from "src/reducers/tasks";
import { generateDummyTasks } from "src/utility/generateDummyTasks";

const TaskGenerator = () => {
  const dispatch = useAppDispatch();
  const onGenerate = () => {
    const dummyTasks = generateDummyTasks();
    console.log({ dummyTasks });
    dispatch(setTasks(dummyTasks));
  };
  return (
    <div className="flex flex-row justify-center items-center mt-28">
      <Card className="w-1/4 p-12 bg-white-500 bg-opacity-15 backdrop-blur-xl drop-shadow-xl ">
        <CardBody className="text-center">
          <div className="font-semibold text-xl py-2">Task List is Empty</div>
          <div className="py-2">
            <Button color="secondary" size="lg" variant="shadow" onClick={onGenerate}>
              Generate Dummy Task
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TaskGenerator;
