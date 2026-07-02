import { NextFont } from "next/dist/compiled/@next/font";
import { IBM_Plex_Sans } from "next/font/google";

export const siteConfig = {
  name: "MSync",
  title: "MSync - Music by you",
  description: "A Music App",
} as const;

export const fonts = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"], //Regular, MediumSemiBold, Bold
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  variable: "--font-ibm-plex-sans",
});
