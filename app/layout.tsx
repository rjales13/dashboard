import { Roboto } from "next/font/google";
import "./globals.css";
import CoreProvider from "@/components/core-provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${roboto.variable} antialiased`}>
        <main className="min-h-screen w-full">
          <div className="mx-auto px-10 py-20">
            <CoreProvider>{children}</CoreProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
