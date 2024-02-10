type Categories = "ADDED" | "STARTED" | "COMPLETED";

type CategoryColors = "primary" | "success" | "danger";

type Priority = "HIGH" | "MEDIUM" | "LOW";

interface TaskItem {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  category: Categories;
  priority: Priority;
  completedAt: string;
}

type Tasks = TaskItem[];

export { Categories, CategoryColors, Priority, TaskItemType, Tasks };
