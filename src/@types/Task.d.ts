type Categories = "ADDED" | "STARTED" | "COMPLETED";

type Colors = "primary" | "success" | "danger" | "secondary";

type Priority = "HIGH" | "MEDIUM" | "LOW";

type TaskMode = "Add" | "Edit" | "View" | undefined;

interface TaskItemType {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  priority: Priority;
  dueDate: string;
  completedAt: string | null;
}

interface Tasks {
  ADDED: TaskItemType[];
  STARTED: TaskItemType[];
  COMPLETED: TaskItemType[];
}

type TaskItemInput = Omit<TaskItemType, "id" | "createdAt" | "updatedAt" | "completedAt"> & { category: Categories };

export { Categories, Colors, Priority, TaskMode, TaskItemType, Tasks, TaskItemInput };
