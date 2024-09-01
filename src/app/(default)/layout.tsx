import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { Roboto } from 'next/font/google'
import HeaderBar from "~/app/_components/Header/HeaderBar";
import ContentContainer from "~/app/_components/Container/ContentContainer";
import SessionProviderWrapper from "../_components/SessionProviderWrapper";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DEV Community",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/devto-logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={roboto.className}>
    <body className="min-h-screen flex flex-col">
      <SessionProviderWrapper>
        <TRPCReactProvider>
          <HeaderBar/>
          <main className="flex-grow bg-gray-100 pt-16">
            <ContentContainer>
              {children}
            </ContentContainer>
          </main>
        </TRPCReactProvider>
      </SessionProviderWrapper>
    </body>
    </html>
  );
}
