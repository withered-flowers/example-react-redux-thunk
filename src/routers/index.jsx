import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";
import CounterPage from "../pages/CounterPage";
import DataTablePage from "../pages/DataTablePage";

export default createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <CounterPage />,
      },
      {
        path: "/table",
        element: <DataTablePage />,
      },
    ],
  },
]);
