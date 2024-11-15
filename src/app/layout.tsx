import "./globals.css";
import Providers from "@/lib/Providers/Providers";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <body>
          
          <div>
            <Toaster position="top-center" />
            {children}
          </div>
        </body>
      </html>
    </Providers>
  );
}
