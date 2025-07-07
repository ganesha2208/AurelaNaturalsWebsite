/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsupNotification from "./whatsupNotification";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <WhatsupNotification />
      <Footer />
    </div>
  );
};

export default Layout;
