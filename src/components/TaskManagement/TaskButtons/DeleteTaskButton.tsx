import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Categories } from "src/@types/Task";
import { DeleteIcon } from "src/components/Icons";
import { useAppDispatch } from "src/hooks";
import { removeTask } from "src/reducers/tasks";

interface DeleteTaskButtonProps {
  category: Categories;
  index: number;
}
const DeleteTaskButton = ({ category, index }: DeleteTaskButtonProps) => {
  const dispatch = useAppDispatch();
  const onDelete = () => dispatch(removeTask({ category, index }));
  return (
    <Popover showArrow backdrop="blur">
      <PopoverTrigger>
        <div title="Delete Task">
          <DeleteIcon size={20} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-2">
          <div className="font-semibold">Are you sure you want to Delete this Task?</div>
          <div className="text-right pt-2">
            <Button color="danger" onClick={onDelete} variant="light">
              Confirm
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DeleteTaskButton;
