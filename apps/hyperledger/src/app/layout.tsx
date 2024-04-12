import "~/styles/globals.css";

import { Space_Grotesk } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "./_components/layout/nav-bar";
import { Toaster } from "sonner";
import Footer from "./_components/layout/footer";

export const space_mono = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hyperledger foundation",
  description: "Enabling an open, trusted, and enduring digital economy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`bg-[#e5e5e5] font-sans ${space_mono.className}`}>
        <NavBar className={space_mono.className} />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer classname={space_mono.className} />
      </body>
      <Toaster />
    </html>
  );
}
