import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About.tsx";
import Home from "./Home.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/portfolio",
                element: <Home />,
            },
            {
                path: "/portfolio/about",
                element: <About />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ChakraProvider value={defaultSystem}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </StrictMode>,
);
