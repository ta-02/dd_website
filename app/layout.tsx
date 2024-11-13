import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const telegraf = localFont({
  src: "./fonts/TelegrafRegular.woff",
  weight: "800",
});

const telegrafBold = localFont({
  src: "./fonts/TelegrafUltraBold.woff",
  weight: "800",
});

const telegraflight = localFont({
  src: "./fonts/TelegrafUltraLight.woff",
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
    <html lang="en">
      <body
        className={`${telegraf.className} ${telegraf.className} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
