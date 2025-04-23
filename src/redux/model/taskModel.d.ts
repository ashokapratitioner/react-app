import store from "../store";

type TaskInitialState = {
    id: string;
    name: string;
    description: string;
    status: "pending" | "completed" | "in-progress"
 }

 export type RootState = ReturnType<typeof store.getState>;

 export {
    TaskInitialState
 }