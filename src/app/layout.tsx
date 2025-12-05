import type { Metadata } from "next";
import "./globals.css";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', 'Roboto', sans-serif" }}
      >
        <main role="main" aria-label="Portfolio content">
          {children}
        </main>
      </body>
    </html>
  );
}
