import { Header } from "@/components/Header/Header";
import "./globals.scss";

import { Footer } from "@/components/Footer/Footer";
import { Providers } from "./providers";
import CookieStateIntersept from "@/helpers/CookieStateIntersept";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={``}>
        <Providers>
          <main >
            {/* <CookieStateIntersept/> */}
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
