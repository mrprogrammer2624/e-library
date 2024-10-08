import { HomeLayout } from "@/Layout/Home";
import { AddNewBook, BookDetails, EditBook, Home } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const TaskPilotRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <HomeLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "add-book",
              element: <AddNewBook />,
            },
            {
              path: "show-details/:id",
              element: <BookDetails />,
            },
            {
              path: "edit/:id",
              element: <EditBook />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default TaskPilotRoute;
