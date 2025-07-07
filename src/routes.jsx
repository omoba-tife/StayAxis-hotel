import { createBrowserRouter } from "react-router-dom";
import Layout from "./shared/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Service";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import BookNowPage from "./pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/booking",
        element: <BookNowPage />,
      },
    ],
  },
]);
