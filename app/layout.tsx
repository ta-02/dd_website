import type { Metadata } from "next";
import Header from "@/components/header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const telegraf = localFont({
  src: "./fonts/TelegrafRegular.woff",
  weight: "800",
});

export const metadata: Metadata = {
  title: "WLU Double Degrees",
  description: "Club website for the Double Degrees Club of Wilfrid Laurier",
  icons: {
    icon: "/DD_LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={telegraf.className + " vsc-initialized"}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
