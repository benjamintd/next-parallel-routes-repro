import { MetadataRoute } from "next";
import translations from "@/i18n/locales/en/translation.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Test",
    short_name: "Test",
    description: translations.subtitle,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/images/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
