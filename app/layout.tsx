import Header from "@/components/header";
// import Footer from "@/components/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className="font-montserrat">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}