import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-sans",
})

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode,
  params: { locale: string };

}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={cn(
        "min-h-screen font-sans antialiased",
        poppins.variable
      )}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
