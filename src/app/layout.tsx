import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 400 600 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 400 600 900',
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
