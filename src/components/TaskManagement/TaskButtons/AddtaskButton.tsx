import { Categories } from "src/@types/Task";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { openModal } from "src/reducers/taskModal";
import { isDarkMode } from "src/reducers/darkMode";
import { Tooltip } from "src/components/Common";
import { AddIcon } from "src/components/Icons";

interface AddTaskButtonProps {
  category?: Categories | undefined;
  size?: number;
}

const AddtaskButton = ({ category, size = 24 }: AddTaskButtonProps) => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(isDarkMode);

  const onAddClick = () => {
    dispatch(openModal({ category, mode: "Add", selectedtask: undefined }));
  };
  return (
    <Tooltip content="Add Task">
      <div onClick={onAddClick}>
        <AddIcon size={size} stroke={darkMode ? "white" : "black"} cursor={"pointer"} />
      </div>
    </Tooltip>
  );
};

export default AddtaskButton;
