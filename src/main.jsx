import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import StudyResources from "./Features/StudyResources/StudyResources.jsx";
import ChatForum from "./Features/ChatForum/ChatForum.jsx";
import RealTimeClassSchedule from "./Features/RealTimeClassSchedule/RealTimeClassSchedule.jsx";
import CampusNavigation from "./Features/CampusNavigation/CampusNavigation.jsx";
import Results from "./components/Results.jsx";
import { classroomAddressInfoLoader } from "./Features/CampusNavigation/classroomAddressInfoLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "studyresources",
        element: <StudyResources />,
        children: [
          {
            path: "results",
            element: <Results />,
          },
        ],
      },
      {
        path: "chatforum",
        element: <ChatForum />,
      },
      {
        path: "realtimeclassschedule",
        element: <RealTimeClassSchedule />,
        children: [
          {
            path: "directions",
            element: <Results />,
          },
        ],
      },
      {
        path: "campusnavigation",
        element: <CampusNavigation />,
        loader: classroomAddressInfoLoader,
        children: [
          {
            path: "directions",
            element: <Results />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
