
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['200','300','400','500','600','700','800'],
  subsets: ["latin"],
  display: 'swap',
})


const raleway = Raleway({
  variable: '--font-raleway',
  weight: ['200','300','400','500','600','700','800'],
  subsets: ["latin"],
  display: 'swap',
})


export const metadata = {
  title: "Samara - Backyard Homes and ADUS",
  description: "Backyard Homes and ADUS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
