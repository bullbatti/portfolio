import { Routes, Route, Navigate } from "react-router";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
