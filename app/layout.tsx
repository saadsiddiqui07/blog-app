import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nextjs MongoDB",
  description: "Crud app built using Nextjs & MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto p-5">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
