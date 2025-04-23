import { createSlice } from "@reduxjs/toolkit";
import { TaskInitialState } from "../model/taskModel";
import { v4 as uuid4 } from "uuid";

const initialState: TaskInitialState[] = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: uuid4(),
        ...action.payload,
      });
    },
    removeTask: (state, action) => {
      return state?.filter((t) => {
        if (!action.payload.Ids?.includes(t.id)) {
          return t;
        }
      });
    },
    completeTask: (state, action) => {
      return state?.map((t) => {
        if (action.payload.Ids?.includes(t.id)) {
          return {
            ...t,
            status: "completed",
          };
        } else {
          return t;
        }
      });
    },
    changeTask: (state, action) => {
      return state?.map((t) => {
        if (t.id === action.payload.id) {
          const modifiedTask = { ...t, ...action.payload };
          return modifiedTask;
        } else {
          return t;
        }
      });
    },
  },
});

export const { addTask, changeTask, removeTask, completeTask } =
  taskSlice.actions;

export default taskSlice.reducer;
