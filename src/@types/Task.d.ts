type Categories = "ADDED" | "STARTED" | "COMPLETED";

type Colors = "primary" | "success" | "danger" | "secondary";

type Priority = "HIGH" | "MEDIUM" | "LOW";

interface TaskItem {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  category: Categories;
  priority: Priority;
  completeTill: string;
  completedAt: string;
}

type Tasks = TaskItem[];

export { Categories, Colors, Priority, TaskItemType, Tasks };
