import { Header } from "@/components/Header/Header";
import "./globals.scss";

import { Footer } from "@/components/Footer/Footer";
import { Providers } from "./providers";
import CookieStateIntersept from "@/helpers/CookieStateIntersept";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={``}>
        <Providers>
          <main >
            {/* TODO <CookieStateIntersept/> */}
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
