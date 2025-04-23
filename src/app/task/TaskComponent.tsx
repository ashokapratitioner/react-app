import { useDispatch, useSelector } from "react-redux";
import { RootState, TaskInitialState } from "../../redux/model/taskModel";
import { FormEvent, useCallback, useRef } from "react";
import { addTask, completeTask, removeTask } from "../../redux/slices/taskSlice";


const TaskComponent = () => {
  const tasksFormRef = useRef<HTMLFormElement>(null);
  const taskList = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  
  const getSelectedTaskIds = useCallback(() => {
    const form = tasksFormRef.current;
    if (!form) return [];
    const formData = new FormData(form);
    return Object.keys(Object.fromEntries(formData.entries()));
  }, []);

  const handleCompleteTask = useCallback(() => {
    const Ids = getSelectedTaskIds();
    dispatch(completeTask({Ids}));
  }, [dispatch]);

  const handleRemoveTask = useCallback(() => {
    const Ids = getSelectedTaskIds();
    dispatch(removeTask({Ids}));
  }, [dispatch]);

  const handleTaskSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    dispatch(addTask(data));
  }, [dispatch]);

  return (
    <div>
      <h1>Task List</h1>
      <form  ref={tasksFormRef} name="tasks-list">
        <ul>
          {taskList.map((task) => (
            <li key={task.id} data-testid={task.id}>
              <span>
                <input type="checkbox" name={task.id} />
              </span>
              <div>
                <span className={task.status === "completed" ? "strikethrough" : task.status}>{task.name}</span>
                <br />
                <span className={task.status === "completed" ? "strikethrough" : task.status}>{task.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </form>
      <div>
        <button type="button" onClick={handleRemoveTask}>
          remove task(s)
        </button>
        <button type="button" onClick={handleCompleteTask}>complete task(s)</button>
      </div>
      <br />
      <br />
      <form name="task-form" onSubmit={handleTaskSubmit}>
        <div>
          <label htmlFor="name">Task name: </label>
          <input type="text" name="name" required  />
        </div>
        <br />
        <div>
          <label htmlFor="description">Task description: </label>
          <input type="text" name="description" required  />
        </div>
        <div>
          <p>Status:</p>
          <label>
            <input type="radio" name="status" value="pending" />
            Pending
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="inprogress" />
            In Progress
          </label>
          <br />
          <label>
            <input type="radio" name="status" value="completed" />
            Completed
          </label>
        </div>
        <br />
        <br />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default TaskComponent;
