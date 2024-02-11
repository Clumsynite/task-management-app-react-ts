type Categories = "ADDED" | "STARTED" | "COMPLETED";

type Colors = "primary" | "success" | "danger" | "secondary";

type Priority = "HIGH" | "MEDIUM" | "LOW";

interface TaskItemType {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  // category: Categories;
  priority: Priority;
  completeTill: string;
  completedAt: string;
}

interface Tasks {
  ADDED: TaskItemType[];
  STARTED: TaskItemType[];
  COMPLETED: TaskItemType[];
}

export { Categories, Colors, Priority, TaskItemType, Tasks };
