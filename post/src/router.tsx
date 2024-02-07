import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import PostInfo from "./pages/PostInfo";
import PostComments from "./components/PostComments";
import { ErrorBoundary } from "./pages/errorBoundry";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: "/posts",
        element: <PostsList />,
      },
      {
        path: "/posts/:postId",
        element: <PostInfo />,
        errorElement:<ErrorBoundary />,
        // loader:PostLoader,
        children: [
          {
            path: "comments",
            element: <PostComments/>
          },
        ]
      },
     
      {
        path: "*",
        element: <NotFound />
      }
    ],
    // errorElement: (<NotFound/>)
  }
])

export const AppRoute = () => {
  return <RouterProvider router={routes} />
}