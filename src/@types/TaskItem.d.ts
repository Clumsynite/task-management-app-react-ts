import { Categories } from "./TaskCategory";

type TaskItemType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  category: Categories;
};

export { TaskItemType };
