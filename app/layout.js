import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Underlay from "./underlay";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const cabinetgrotesk = localFont({
  src: [
    {
      path: "../fonts/CabinetGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },

    {
      path: "../fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-cabinetgrotesk",
});

export const metadata = {
  title: "EVILL",
  description: "Ezra Earl Villanueva's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} ${satoshi.variable} ${cabinetgrotesk.variable}
          antialiased `
        }
      >
        <Underlay />
        <Header />
        <main className="relative z-40">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
