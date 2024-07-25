import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormTable from "./components/FormTable.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/list", element: <FormTable /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
