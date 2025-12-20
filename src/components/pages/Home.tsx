import AboutUs from "../organism/AboutUs";
import Header from "../organism/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <AboutUs />
    </div>
  );
}
