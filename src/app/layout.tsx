import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wing Chung Ng",
  description: "Personal website of Wing Chung Ng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={spaceGrotesk.className}>
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_800px_at_100%_200px,hsl(var(--glow-primary)/0.12),transparent_80%)]" />
        <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_800px_at_0%_600px,hsl(var(--glow-accent)/0.12),transparent_80%)]" />
        <div className="fixed inset-0 -z-40 bg-background" />
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
