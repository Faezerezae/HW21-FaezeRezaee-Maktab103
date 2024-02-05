import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import PostInfo from "./pages/PostInfo";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/posts",
        element: <PostsList />,
      },
      {
        path: "/posts/:postId",
        element: <PostInfo />,
        children: [
          {
            path: "comments",
            element: <div>rfvhgbjk</div>
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