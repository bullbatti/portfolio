import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import system from "./theme";
import { ColorModeProvider } from "./components/ui/color-mode";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter basename="/portfolio">
            <ChakraProvider value={system}>
                <ColorModeProvider>
                    <App />
                </ColorModeProvider>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>,
);
