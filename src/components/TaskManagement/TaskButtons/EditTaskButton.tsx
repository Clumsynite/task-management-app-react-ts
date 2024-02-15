import { Categories, TaskItemType } from "src/@types/Task";
import { Tooltip } from "src/components/Common";
import EditIcon from "src/components/Icons/EditIcon";
import { useAppDispatch } from "src/hooks";
import { openModal } from "src/reducers/taskModal";

interface EditTaskButtonProps {
  category: Categories;
  task: TaskItemType;
}
const EditTaskButton = ({ category, task }: EditTaskButtonProps) => {
  const dispatch = useAppDispatch();
  const onEdit = () => dispatch(openModal({ category, mode: "Edit", selectedtask: task }));

  return (
    <Tooltip content="Edit Task">
      <div>
        <EditIcon size={20} onClick={onEdit} />
      </div>
    </Tooltip>
  );
};

export default EditTaskButton;
