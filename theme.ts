'use client';

import { createTheme } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: `${inter.style.fontFamily}, sans-serif`,
  headings: { fontFamily: `${inter.style.fontFamily}, sans-serif` },
});
