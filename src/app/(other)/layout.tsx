import "@/styles/globals.css";

import Header from "@/components/digi/Header";
import Footer from "@/components/digi/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
