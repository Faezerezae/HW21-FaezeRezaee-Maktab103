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