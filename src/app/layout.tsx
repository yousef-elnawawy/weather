import type { Metadata } from "next";
import "./globals.css";
import { WeatherProvider } from "./context/WeatherContext";

export const metadata: Metadata = {
  title: "ابليكيشن الطقس",
  description: "من افضل التطبيقات للتعرف علي احوال الطقس في مدينتك",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="ar" dir="rtl">
      <body>
        <WeatherProvider>
        {children}
        </WeatherProvider>
      </body>
    </html>
  );
}
