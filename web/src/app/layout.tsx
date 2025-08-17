import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"; //  <-- 1. IMPORTAR HEADER
import Footer from "@/components/layout/Footer"; //  <-- 2. IMPORTAR FOOTER

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rifas Premium",
  description: "La mejor plataforma de rifas de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        {/* 3. AÑADIR WRAPPER FLEX */}
        <div className="flex flex-col min-h-screen">
          <Header /> {/* <-- 4. AÑADIR HEADER */}
          <main className="flex-grow container mx-auto p-4">
            {children} {/* <-- Las páginas se renderizarán aquí */}
          </main>
          <Footer /> {/* <-- 5. AÑADIR FOOTER */}
        </div>
      </body>
    </html>
  );
}