import Nav from "../molecules/Nav";
import AboutUs from "../organism/AboutUs";
import Amenities from "../organism/Amenities";
import Footer from "../organism/Footer";
import Gallery from "../organism/Gallery";
import Header from "../organism/Header";
import Location from "../organism/Location";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Nav />
      <Header />
      <AboutUs />
      <Amenities />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
