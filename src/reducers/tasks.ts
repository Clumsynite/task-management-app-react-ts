import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Categories, Tasks } from "src/@types/Task";
import { DropResult } from "react-beautiful-dnd";

const localTasks = localStorage.getItem("tasks");

const initialState: Tasks = localTasks
  ? JSON.parse(localTasks)
  : {
      ADDED: [],
      STARTED: [],
      COMPLETED: [],
    };

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    onDragEnd: (state, action: PayloadAction<DropResult>) => {
      const result = action.payload;
      const { source, destination } = result;

      if (!destination) return;
      if (source.droppableId === destination.droppableId && source.index === destination.index) return;

      const oldCategory = source.droppableId as Categories;
      const newCategory = destination.droppableId as Categories;

      const newtasksObj = { ...state };

      const updatedAt = new Date().toISOString();
      const oldTasks = newtasksObj[oldCategory];
      const [removeTask] = oldTasks.splice(source.index, 1);
      removeTask.updatedAt = updatedAt;

      // update index in same category
      if (oldCategory == newCategory) {
        oldTasks.splice(destination.index, 0, removeTask);
        newtasksObj[oldCategory] = oldTasks;
      } else {
        // add to new category
        const newTasks = newtasksObj[newCategory];
        newTasks.splice(destination.index, 0, removeTask);
      }
      state = { ...newtasksObj };
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    setTasks: (state, action: PayloadAction<Tasks>) => {
      state = action.payload;
    },
  },
});

export const { onDragEnd, setTasks } = tasksSlice.actions;

export const getTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
