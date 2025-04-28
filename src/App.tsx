import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Suspense } from "react";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={routers} />
      </Suspense>
    </Provider>
  );
}

export default App;
