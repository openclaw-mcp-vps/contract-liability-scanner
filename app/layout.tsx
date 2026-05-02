import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Liability Scanner – Spot Hidden Risks Before You Sign",
  description: "AI-powered contract analysis that identifies unlimited liability, indemnification traps, and risky clauses that could bankrupt your small business."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a56a1514-e5cd-49da-a94f-02f8af1431c2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
