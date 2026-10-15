import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const body = localFont({
  src: [
    { path: "../assets/fonts/EDF2020W05-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/EDF2020W05-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/EDF2020W05-Italic.woff2", weight: "400", style: "italic" },
    { path: "../assets/fonts/EDF2020W05-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
  adjustFontFallback: "Arial",
});

const soft = localFont({
  src: "../assets/fonts/EDF2020Soft-Italic.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-soft",
  adjustFontFallback: "Arial",
});

const url = "https://simvia-tech.github.io/csauto/";
const description =
  "csauto generates, runs and monitors code_saturne and code_aster simulation campaigns from VS Code: one parameter table, hundreds of cases, local or Slurm.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "csauto: simulation campaigns in VS Code",
  description,
  alternates: { canonical: url },
  icons: { icon: "/csauto/favicon.svg" },
  openGraph: { title: "csauto", description, url, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${soft.variable}`}>
      <body>{children}</body>
    </html>
  );
}
