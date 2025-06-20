import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}