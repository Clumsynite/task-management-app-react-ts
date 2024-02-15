import { Categories, TaskItemType } from "src/@types/Task";
import { Tooltip } from "src/components/Common";
import { ExpandIcon } from "src/components/Icons";
import { useAppDispatch } from "src/hooks";
import { openModal } from "src/reducers/taskModal";

interface ViewTaskButtonProps {
  category: Categories;
  task: TaskItemType;
}
const ViewTaskButton = ({ category, task }: ViewTaskButtonProps) => {
  const dispatch = useAppDispatch();
  const onExpand = () => dispatch(openModal({ category, mode: "View", selectedtask: task }));

  return (
    <Tooltip content="View Task">
      <div>
        <ExpandIcon size={20} onClick={onExpand} />
      </div>
    </Tooltip>
  );
};

export default ViewTaskButton;
