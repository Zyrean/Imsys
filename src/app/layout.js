import MainHeader from "@/components/header/MainHeader";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Imsys",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className="bg-gray-50/15"> */}
      <body>
        <div className="mx-auto w-[390px] bg-white sm:w-[544px] lg:w-[1024px]">
          <MainHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
