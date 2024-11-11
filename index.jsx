import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
