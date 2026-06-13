import { Poppins, Space_Grotesk } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-poppins',
  display: 'swap',
});
const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  title: 'Sahil Mundhe | Portfolio',
  description: 'Sahil Mundhe — Full Stack Developer & AI/ML Enthusiast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${space.variable}`}>
      <head>
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
