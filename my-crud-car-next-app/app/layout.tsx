import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-50">
        <NavBar />
        {children}
        <ToastContainer theme="dark" />
      </body>
    </html>
  );
}
