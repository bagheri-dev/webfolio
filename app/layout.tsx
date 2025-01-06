import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bagheri-dev | Front-End",
  description: "Mahdi Bagheri Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-IRANYekanWeb antialiased bg-[#E5E5E5] dark:bg-zinc-700`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
