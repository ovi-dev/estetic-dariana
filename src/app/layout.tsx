
import type { Metadata } from "next";
import "./globals.css";
import { inter, roboto } from "@/fonts/fonts";
import Footer from "@/components/ui/footer/Footer";
import Menu2 from "@/components/ui/menu/Menu2";
import Menu from "@/components/ui/menu/Menu";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Estetica Datiz",
  description: "estetica datiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="es">
      <body
        className={`${roboto.className} ${inter.className} bg-site bg-no-repeat bg-cover  `}
      >
        <main className=" mx-auto">

        
        <Menu2/>

        {children}
        <Footer/>

        </main>
   

    

        

      </body>
    </html>
  );
}
