import Container from "../atoms/Container";
import Header from "../molecules/Header";
import Nav from "../molecules/Nav";
import fondo from "/static/image.jpg";

export default function Home() {
  return (
    <Container background={fondo}>
      <Nav />
      <Header />
    </Container>
  );
}
