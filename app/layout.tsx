import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cars Showcase",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Include any necessary meta tags, stylesheets, or scripts */}
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
