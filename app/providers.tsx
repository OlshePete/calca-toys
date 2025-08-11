'use client';

import { system as theme } from '@theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { lato, ts_remarker } from './fonts';

export { lato, ts_remarker };

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}
