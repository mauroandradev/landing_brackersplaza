import TitleHeader from "../atoms/TitleHeader";
import Container from "../atoms/Container";
import fondo from "/static/image.jpg";
import Nav from "../molecules/Nav";

export default function Header() {
  return (
    <Container background={fondo}>
      <Nav />
      <div className="flex text-center justify-center items-center xl:h-[80vh] sm:h-auto md:h-auto">
        <div className="flex flex-col gap-5 p-5 w-3/4">
          <p className="text-2xl">Welcome to Paradise</p>
          <TitleHeader text="Where luxury meets the ocean" />
          <TitleHeader text="South Padre Island" colorText="text-teal-300" />
          <button className="bg-teal-300 p-3 rounded-md font-black lg:w-1/5 m-auto hover:cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
}
