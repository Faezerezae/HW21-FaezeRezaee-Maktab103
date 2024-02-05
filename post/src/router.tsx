import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Post from "./pages/Post";

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
        path: "/post",
        element: <Post />,
        // children: [{
        //   path: "/:postId",
        //   element: <Link to="/:postId">Posts</Link>,

        // },],
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