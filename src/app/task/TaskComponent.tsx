import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/model/taskModel";
import { FormEvent, useCallback, useRef } from "react";
import {
  addTask,
  completeTask,
  removeTask,
} from "../../redux/slices/taskSlice";

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
    dispatch(completeTask({ Ids }));
  }, [dispatch]);

  const handleRemoveTask = useCallback(() => {
    const Ids = getSelectedTaskIds();
    dispatch(removeTask({ Ids }));
  }, [dispatch]);

  const handleTaskSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      dispatch(addTask(data));
    },
    [dispatch]
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Task List
      </h1>

      <form ref={tasksFormRef} name="tasks-list">
        <ul className="space-y-4">
          {taskList.map((task) => (
            <li
              key={task.id}
              data-testid={task.id}
              className="flex gap-4 p-4 bg-white rounded-md shadow-sm border border-gray-200"
            >
              <span>
                <input
                  type="checkbox"
                  name={task.id}
                  className="w-5 h-5 text-blue-600 rounded"
                />
              </span>
              <div>
                <span
                  className={`${
                    task.status === "completed"
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  } font-medium`}
                >
                  {task.name}
                </span>
                <br />
                <span
                  className={`${
                    task.status === "completed"
                      ? "line-through text-gray-400"
                      : "text-gray-600"
                  } text-sm`}
                >
                  {task.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </form>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleRemoveTask}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Remove Task(s)
        </button>
        <button
          type="button"
          onClick={handleCompleteTask}
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Complete Task(s)
        </button>
      </div>

      <form
        name="task-form"
        onSubmit={handleTaskSubmit}
        className="mt-10 space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Task Name:
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-1"
          >
            Task Description:
          </label>
          <input
            type="text"
            name="description"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <p className="text-gray-700 font-medium mb-2">Status:</p>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="status"
              value="pending"
              className="text-blue-500"
            />
            <span className="ml-2 text-gray-700">Pending</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="status"
              value="inprogress"
              className="text-yellow-500"
            />
            <span className="ml-2 text-gray-700">In Progress</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="status"
              value="completed"
              className="text-green-500"
            />
            <span className="ml-2 text-gray-700">Completed</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskComponent;
