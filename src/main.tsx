import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router";
import App from "./App";
import "./index.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/portfolio">
        <ChakraProvider value={defaultSystem}>
            <App />
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>,
);
