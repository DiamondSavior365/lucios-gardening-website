import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#13291f]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
