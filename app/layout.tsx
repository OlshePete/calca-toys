import { Header } from '@components/Header/Header';
import './globals.scss';

import { Footer } from '@components/Footer/Footer';
import { lato, Providers, ts_remarker } from './providers';
import { Suspense } from 'react';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${lato.variable} ${ts_remarker.variable}`} style={{ height: '100dvh' }}>
        <Providers>
          <Suspense fallback={<>Loading...</>}>
            <main>
              <Header />
              {children}
              <Footer />
            </main>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
