import "~/styles/globals.css";

import { Lato } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import NavBar from "./_components/layout/nav-bar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-sans",
});

export const metadata = {
  title:
    "QTT - А hub of innovation inspired by the trailblazing vision of Donald Trump.",
  description:
    "Welcome to the QTT Project – a hub of innovation inspired by the trailblazing vision of Donald Trump. At QTT, we are committed to redefining the future through cutting-edge initiatives and forward-thinking solutions.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`font-sans ${lato.variable} bg-[#0B0B0F] text-white`}>
        <Toaster />

        <NavBar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
