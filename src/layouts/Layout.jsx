import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
