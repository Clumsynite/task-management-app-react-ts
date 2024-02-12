import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Categories, Tasks } from "src/@types/Task";
import { DropResult } from "react-beautiful-dnd";

const localTasks = localStorage.getItem("tasks");

// Define the initial state using that type
const initialState: Tasks = localTasks
  ? JSON.parse(localTasks)
  : {
      ADDED: [],
      STARTED: [],
      COMPLETED: [],
    };

export const tasksSlice = createSlice({
  name: "tasks",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onDragEnd: (state, action: PayloadAction<DropResult>) => {
      const result = action.payload;
      const { source, destination } = result;
      if (!destination) return;
      if (source.droppableId === destination.droppableId && source.index === destination.index) return;
      const oldCategory = source.droppableId as Categories;
      const newCategory = destination.droppableId as Categories;

      const newtasksObj = JSON.parse(JSON.stringify(state));

      const updatedAt = new Date().toISOString();
      if (oldCategory == newCategory) {
        const tasks = newtasksObj[oldCategory];
        const [removeTask] = tasks.splice(source.index, 1);
        removeTask.updatedAt = updatedAt;
        tasks.splice(destination.index, 0, removeTask);
        newtasksObj[oldCategory] = tasks;
      } else {
        // remove from old category
        const oldtasks = newtasksObj[oldCategory];
        const [removeTask] = oldtasks.splice(source.index, 1);
        const newTasks = newtasksObj[newCategory];
        removeTask.updatedAt = updatedAt;
        newTasks.splice(destination.index, 0, removeTask);
      }
      state = { ...newtasksObj };
      console.log(result);
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
