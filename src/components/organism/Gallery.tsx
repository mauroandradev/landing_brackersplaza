import Container from "../atoms/Container";
import PSection from "../atoms/PSection";
import TitleSection from "../atoms/TitleSection";
import GalleryMosaic from "../molecules/GalleryMosaic";

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/static/brackersplaza.jpg",
      alt: "Living room",
      label: "Sala con vista al mar",
    },
    {
      id: 2,
      src: "/static/vista-tenis.jpg",
      alt: "Kitchen",
      label: "Cocina equipada",
    },
    {
      id: 3,
      src: "/static/jacuzzi.jpeg",
      alt: "Balcony",
      label: "Vista desde el balcón",
    },
    {
      id: 4,
      src: "/static/pool-sea.jpg",
      alt: "Balcony seating",
      label: "Área de descanso",
    },
    {
      id: 5,
      src: "/static/vista-playa-piscina.jpg",
      alt: "Building",
      label: "Breakers Plaza",
    },
    { id: 6, src: "/static/vista-playa.jpg", alt: "Pool", label: "Piscina" },
    { id: 7, src: "/static/cocina.jpg", alt: "Pool", label: "Piscina" },
    { id: 8, src: "/static/climatizada.jpg", alt: "Pool", label: "Piscina" },
    { id: 8, src: "/static/living.jpg", alt: "Pool", label: "Piscina" },
    { id: 9, src: "/static/pieza.jpg", alt: "Pool", label: "Piscina" },
    { id: 10, src: "/static/pieza2.jpg", alt: "Pool", label: "Piscina" },
    { id: 11, src: "/static/pieza3.jpg", alt: "Pool", label: "Piscina" },
    { id: 12, src: "/static/banio.jpg", alt: "Pool", label: "Piscina" },
    { id: 13, src: "/static/cocina-2.jpg", alt: "Pool", label: "Piscina" },
    {
      id: 14,
      src: "/static/camino-a-playa.jpg",
      alt: "Pool",
      label: "Piscina",
    },
    { id: 15, src: "/static/condo-atras.jpg", alt: "Pool", label: "Piscina" },
    { id: 16, src: "/static/piscina-2.jpg", alt: "Pool", label: "Piscina" },
    { id: 17, src: "/static/canchas.jpg", alt: "Pool", label: "Piscina" },
    { id: 18, src: "/static/dentro.jpg", alt: "Pool", label: "Piscina" },
    { id: 19, src: "/static/camino-playa.jpg", alt: "Pool", label: "Piscina" },
  ];
  return (
    <Container>
      <div className="flex flex-col gap-10  p-10">
        <div className="flex flex-col gap-10 text-center">
          <TitleSection text="Gallery" />
          <PSection text="Explore every corner of your next destination" />
        </div>
        <div>
          <GalleryMosaic images={images} pageSize={5} />
        </div>
      </div>
    </Container>
  );
}
