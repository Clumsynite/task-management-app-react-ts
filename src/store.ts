import { configureStore } from "@reduxjs/toolkit";

import { darkMode as darkModeReducer, tasks as tasksReducer, taskModal as taskModalReducer } from "./reducers";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    tasks: tasksReducer,
    taskModal: taskModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
