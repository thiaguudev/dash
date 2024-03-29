import type { Metadata } from "next";

import { fontSans } from "@/config/fonts";
import { NextAuthSessionProvider } from "@/providers/session-provider";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Survey Apoli",
  description: "Survey Apoli",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={fontSans.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
