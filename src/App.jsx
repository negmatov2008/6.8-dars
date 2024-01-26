import { useState } from "react";
import Navbar from "./pages/Navbar";
import Root from "./pages/Root";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Chrome from "./components/Chrome";
import Content from "./components/Content";
import Instagram from "./components/Instagram";
import Uzum from "./components/Uzum";
import Tailwind from "./components/Tailwind";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "",
        element: <Navigate to={"chrome"} />,
      },
      {
        path: "chrome",
        element: <Chrome />,
      },
      {
        path: "insta",
        element: <Instagram />,
      },
      {
        path: "uzum",
        element: <Uzum />,
      },
      {
        path: "tailwind",
        element: <Tailwind />,
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
