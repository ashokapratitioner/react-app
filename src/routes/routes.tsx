import { createBrowserRouter } from "react-router-dom";
import Home from "../app/page";
import MainLayout from "../app/layout";
import RenderProps from "../app/render-props";
import RouterErrorElement from "./RouterErrorElement";
import { notificationWrapper } from "../app/higher-order";
import Notification from "../components/Notification";
import TwoWayContainer from "../app/two-way";
import RotateComponent from "../components/DummyComponent";
import TaskComponent from "../app/task/TaskComponent";
import { getRequest } from "../services/RestService";
import { lazy } from "react";
import PhoneDisplayComponent from "../app/phone-display";

const PhotoPull = lazy(() => import("../app/photo-pull"));

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
      { path: "photo-pull", element: <PhotoPull />, loader: async () => await getRequest(undefined, "/photos"), title: "Photo pull" },
      { path: "phone-display", element: <PhoneDisplayComponent />, loader: async () => await getRequest("http://localhost:5001", "/phone-number/all"), title: "Phone display" },
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
