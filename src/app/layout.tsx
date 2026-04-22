import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Wing Chung Ng | Software Engineer",
  description:
    "Personal site of Wing Chung Ng, rebuilt as a responsive retro web portal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
