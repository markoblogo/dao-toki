import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dao-toki.abvx.xyz'),
  title: 'Chinese Wisdom in toki pona',
  description: 'Bilingual landing for Chinese Wisdom in toki pona.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
