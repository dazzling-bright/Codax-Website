
import Nav from "../components/header/nav";
import Footer from "../components/Home/Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[96rem] mx-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
