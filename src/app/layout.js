import { Inter } from "next/font/google";
import "./globals.scss";
import "react-tooltip/dist/react-tooltip.css";

export const metadata = {
  title: "Kimuel Website",
  description: "Kimuel Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
