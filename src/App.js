import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Work from "./pages/work/Work";
import Timeline from "./pages/timeline/Timeline";
import Services from "./pages/services/Services";
import Testimonial from "./pages/testimonial/Testimonial";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer.jsx";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
