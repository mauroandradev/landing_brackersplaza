import Nav from "../molecules/Nav";
import AboutUs from "../organism/AboutUs";
import Amenities from "../organism/Amenities";
import Gallery from "../organism/Gallery";
import Header from "../organism/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Header />
      <AboutUs />
      <Amenities />
      <Gallery />
    </div>
  );
}
