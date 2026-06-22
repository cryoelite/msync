import {MetadataRoute} from "next";
import {siteConfig} from "@/src/config/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.name,
        description: siteConfig.description,
        icons: [
            {
                src: "/icons/web-app-manifest-192x192.png?v=001",
                "sizes": "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/icons/web-app-manifest-512x512.png?v=001",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/"
    };
}