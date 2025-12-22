import Nav from "../molecules/Nav";
import AboutUs from "../organism/AboutUs";
import Header from "../organism/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav />
      <Header />
      <AboutUs />
    </div>
  );
}
