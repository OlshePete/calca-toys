import { Header } from "@/components/Header/Header";
import "./globals.scss";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer/Footer";
import { Providers } from "./providers";
import CookieStateIntersept from "@/helpers/CookieStateIntersept";

// const lato = Lato({
//   weight:["100", "300","400","700","900"],
//   subsets: ["latin"],
//  });

// const lato = localFont({
//   variable:"--font--lato",
//   src: [
//     {
//       path: "../public/fonts/Lato/Lato-Bold.woff",
//     },
//     {
//       path: "../public/fonts/Lato/Lato-Medium.woff",
//     },
//     {
//       path: "../public/fonts/Lato/Lato-Regular.woff",
//     },
//     {
//       path: "../public/fonts/Lato/Lato-Semibold.woff",
//     },
//   ],
// });
const blue_curve = localFont({
  src: [
    {
      path: "../public/fonts/Blue_curve/Bluecurve-Light.ttf",
    },
    {
      path: "../public/fonts/Blue_curve/Bluecurve-Regular.ttf",
    },
    {
      path: "../public/fonts/Blue_curve/Bluecurve-Bold.ttf",
    },
  ],
});
// const ts_remarker = localFont({
//   variable:"--font--ts-remarker",
//   src: [
//     {
//       path: "../public/fonts/TS_remarker/TS Remarker Regular.otf",
//     }
//   ],
// });
// export const metadata: Metadata = {
//   title: "Калька, магазин игрушек",
//   description: "Интернет магазин игрушек",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={``}>
      {/* <body className={` ${lato.variable} ${blue_curve.variable} ${ts_remarker.variable}`}> */}
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
