import type { Metadata } from "next";
import "@styles/globals.css";
import NavBar from "@components/NavBar";

export const metadata: Metadata = {
  title: "Lanabi Mohamed",
  description: "Lanabi Mohamed portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="text-white bg-primary p-2 md:px-20">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
