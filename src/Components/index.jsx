// Layout components
import Navbar from "./Layout/Navbar";
import AccessDenied from "./CommonErrorPages/AccessDenied";

// Spin Loader Component
import SpinLoader from "../Components/SpinLoader/loader";
import ContactWidget from "./Widgets/ContactWidget";
import Sidenavbar from "./Widgets/Sidenavbar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Carousels from "./Layout/Carousels";
import Services from "./Layout/Services";
import Footer from "./Layout/Footer";
import GoogleMapLocation from "./ReusableComponents/GoogleMapLocation";
import TypingEffect from "./ReusableComponents/TypingEffect";
// Exporting components individually
export {
  AccessDenied,
  Navbar,
  SpinLoader,
  ContactWidget,
  Sidenavbar,
  About,
  Contact,
  Carousels,
  Services,
  Footer,
  GoogleMapLocation,
  TypingEffect,
};

// Creating Components object for dynamic importing
export const Components = {
  AccessDenied,
  Navbar,
  SpinLoader,
  ContactWidget,
  Sidenavbar,
  About,
  Contact,
  Carousels,
  Services,
  Footer,
  GoogleMapLocation,
  TypingEffect,
};
