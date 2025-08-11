import type { Metadata } from "next";
import "./globals.css";
import Background from "../components/Background";

export const metadata: Metadata = {
  title: "Prashlesh Pratap Singh - Full Stack Developer",
  description: "Motivated and detail-oriented Computer Science student with a strong foundation in full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js) with Python and JavaScript.",
  keywords: ["portfolio", "full stack developer", "MERN stack", "Python", "JavaScript", "React", "Node.js"],
  authors: [{ name: "Prashlesh Pratap Singh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="font-sans antialiased bg-background text-primary-text"
      >
        <Background />
        <main className="relative z-10" role="main" aria-label="Portfolio content">
          {children}
        </main>
      </body>
    </html>
  );
}
