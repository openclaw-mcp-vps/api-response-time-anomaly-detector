import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Response Time Anomaly Detector",
  description: "Alert when API responses slow down unexpectedly. Monitor endpoints, detect performance degradation, and get real-time alerts before users complain."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a8f24a59-3372-4265-a1ea-130b3317feca"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
