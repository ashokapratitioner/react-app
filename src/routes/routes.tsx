import { createBrowserRouter } from "react-router-dom";
import Home from "../app/page";
import MainLayout from "../app/layout";
import RenderProps from "../app/render-props";
import RouterErrorElement from "./RouterErrorElement";
import { notificationWrapper } from "../app/higher-order";
import Notification from "../components/Notification";
import TwoWayContainer from "../app/two-way";
import PhotoPull from "../app/photo-pull";
import RotateComponent from "../components/DummyComponent";
import TaskComponent from "../app/task/TaskComponent";

const NotificationWrapper = notificationWrapper(Notification);

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RouterErrorElement />,
    children: [
      { path: "", element: <Home />, title: "Quick app" },
      { path: "render-props", element: <RenderProps />, title: "Render props" },
      {
        path: "higher-order",
        element: <NotificationWrapper value="My Note" />,
        title: "higher order",
      },
      { path: "two-way", element: <TwoWayContainer />, title: "Two way" },
      { path: "photo-pull", element: <PhotoPull />, title: "Photo pull" },
      {
        path: "dummy",
        element: <RotateComponent word="technology" />,
        title: "Dummy",
      },
      { path: "task", element: <TaskComponent />, title: "Task" },
    ],
  },
];

export const pages = routes?.[0]?.children?.map((route) => ({
  path: route.path,
  pagename: route.title,
}));

export const routers = createBrowserRouter(routes);
