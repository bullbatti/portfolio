import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["apple-touch-icon.png", "favicon.ico"],
            manifest: {
                name: "La Mia App",
                short_name: "App",
                icons: [
                    {
                        src: "/portfolio/icons/icon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/portfolio/icons/icon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
    base: "/portfolio",
});
