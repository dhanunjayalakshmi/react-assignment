import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12 -mt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
