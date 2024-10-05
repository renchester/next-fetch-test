import type { Metadata } from 'next';
import { Inter, Onest } from 'next/font/google';
import './globals.css';

const onest = Onest({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-onest',
  display: 'swap',
  preload: false,
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Test Task - Renchester Ramos',
  description: 'Next.js Test Task for Evelan by Renchester Ramos',
  openGraph: {
    title: 'Test Task - Renchester Ramos',
    description:
      'A data-fetching page to showcase Next.js skills, built as a test task for Evelan',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
