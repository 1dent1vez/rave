import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { eventConfig } from "@/config/event";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${eventConfig.EVENTO_TITULO} | ${eventConfig.FESTEJADO_NOMBRE}`,
  description: `Te invito a ${eventConfig.EVENTO_TITULO}. ${eventConfig.FECHA_TEXTO} a las ${eventConfig.HORA_TEXTO} en ${eventConfig.UBICACION_TITULO}.`,
  keywords: ["invitacion", "rave", "fiesta", "evento", "cumpleanos"],
  authors: [{ name: eventConfig.FESTEJADO_NOMBRE }],
  openGraph: {
    title: eventConfig.EVENTO_TITULO,
    description: `Te invito a celebrar conmigo - ${eventConfig.FECHA_TEXTO}`,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
