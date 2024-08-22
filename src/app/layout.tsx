import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "./components/header";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "devChallenges Github Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx([
          beVietnamPro.className,
          "min-h-screen bg-gray-dark text-gray-light",
        ])}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
