import React from "react";
import BlogPage from "./views/BlogPage";

import { useRoutes } from "react-router-dom";
import WriteBlog from "./views/WriteBlog";
import BlogList from "./views/BlogList";
import Confirmation from "./Components/Confirmation";
import HomePage from "./views/homepage";

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
