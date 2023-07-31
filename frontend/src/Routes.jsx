import React from "react";
import BlogPage from "./Views/blogpage";
import HomePage from "./Views/homepage";

import { useRoutes } from "react-router-dom";
import WriteBlog from "./Views/WriteBlog";
import BlogList from "./Views/BlogList";
import Confirmation from "./Components/Confirmation";

const RoutedPath = () => {
  const routes = useRoutes([
    { path: "/blog/:id", element: <BlogPage /> },
    { path: "/", element: <HomePage /> },
    { path: "/writeblog", element: <WriteBlog /> },
    { path: "/bloglist", element: <BlogList /> },
    { path: "/confirmation", element: <Confirmation /> },
  ]);
  return routes;
};

export default RoutedPath;
