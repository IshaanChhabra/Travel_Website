import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Services;
