import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { closeModal } from "src/reducers/taskModal";
import { useAppDispatch, useAppSelector } from "src/hooks";
import TaskForm from "./TaskForm";
import { isDarkMode } from "src/reducers/darkMode";

const TaskModal = () => {
  const darkMode = useAppSelector(isDarkMode);
  const { isVisible, category, mode, selectedtask } = useAppSelector((state) => state.taskModal);
  const dispatch = useAppDispatch();

  return isVisible ? (
    <Modal
      backdrop={"blur"}
      size="3xl"
      isOpen={isVisible}
      onClose={() => dispatch(closeModal())}
      className={`${darkMode ? "dark" : ""} text-foreground bg-background`}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader>{mode} Task</ModalHeader>
            <ModalBody className={darkMode ? "dark" : ""}>
              <TaskForm defaultCategory={category} mode={mode} task={selectedtask} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  ) : null;
};

export default TaskModal;
