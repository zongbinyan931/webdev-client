import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Zongbin Yan | Kambaz A1",
  description: "CS5610 HTML and Next.js exercises",
};
// A1 uses browser-default HTML styles. CSS is introduced in A2.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
