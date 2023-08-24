import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import AboutImg from "../assets/2.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact US"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
