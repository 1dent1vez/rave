import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { eventConfig } from "@/config/event";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${eventConfig.EVENTO_TITULO} | ${eventConfig.FESTEJADO_NOMBRE}`,
  description: `Invitación digital para ${eventConfig.EVENTO_TITULO}. ${eventConfig.FECHA} a las ${eventConfig.HORA} en ${eventConfig.UBICACION_TITULO}.`,
  keywords: ['invitación', 'rave', 'fiesta', 'evento', 'cumpleaños'],
  authors: [{ name: eventConfig.FESTEJADO_NOMBRE }],
  openGraph: {
    title: eventConfig.EVENTO_TITULO,
    description: `Celebración de ${eventConfig.FESTEJADO_NOMBRE} - ${eventConfig.FECHA}`,
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
