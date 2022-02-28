import {
  Aboutme,
  Contact,
  Experience,
  Footer,
  Header,
  Myservices,
  Navigation,
  Portfolio,
  Testimonials,
} from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <Aboutme />
      <Experience />
      <Navigation />
      <Myservices />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
