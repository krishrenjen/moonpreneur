import Footer from "@/components/dashboard/footer";
import Header from "@/components/dashboard/header";

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