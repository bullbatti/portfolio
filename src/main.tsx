import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/navbar/Navbar.tsx";
import About from "./About.tsx";

const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <App />,
    },
    {
        path: "/portfolio/about",
        element: <About />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider value={defaultSystem}>
            <Navbar />
            <RouterProvider router={router} />
        </ChakraProvider>
    </StrictMode>,
);
