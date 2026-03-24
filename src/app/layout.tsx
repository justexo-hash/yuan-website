import type { Metadata, Viewport } from "next";
import {
  Noto_Serif_Display,
  Playfair_Display,
  Source_Sans_3,
  JetBrains_Mono,
  Noto_Serif_SC,
} from "next/font/google";
import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-noto-serif-display",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "¥UAN — The New Global Reserve Currency",
  description:
    "An official communication from the Bureau of Monetary Destiny. The petrodollar is over. Long live the ¥uan.",
  openGraph: {
    title: "¥UAN — The New Global Reserve Currency",
    description:
      "An official communication from the Bureau of Monetary Destiny. The petrodollar is over. Long live the ¥uan.",
    images: ["/images/yuan-logo-square.jpeg"],
  },
  icons: {
    icon: "/images/yuan-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#c41e3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifDisplay.variable} ${playfairDisplay.variable} ${sourceSans.variable} ${jetbrainsMono.variable} ${notoSerifSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
