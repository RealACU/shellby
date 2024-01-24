import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const varela_round = Varela_Round({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shellby's Home",
  description: "Extra credit for AP Psych",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={varela_round.className}>
        <Navbar />
        <div className="h-1/5"></div>
        <div className="h-4/5">{children}</div>
      </body>
    </html>
  );
}
