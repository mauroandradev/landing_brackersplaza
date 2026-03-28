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
      src: "/static/jacuzzi.jpg",
      alt: "Balcony",
      label: "Vista desde el balcón",
    },
    {
      id: 4,
      src: "/static/pool-sea.webp",
      alt: "Balcony seating",
      label: "Área de descanso",
    },
    {
      id: 5,
      src: "/static/vista-playa-piscina.jpg",
      alt: "Building",
      label: "Breakers Plaza",
    },
    { id: 20, src: "/static/comedor.jpg", alt: "Comedor", label: "Comedor" },
    { id: 7, src: "/static/cocina.jpg", alt: "Cocina", label: "Cocina" },
    { id: 23, src: "/static/cocina-4.webp", alt: "Cocina4", label: "Cocina4" },
    { id: 8, src: "/static/living.jpg", alt: "Living", label: "Living" },
    { id: 9, src: "/static/pieza.jpg", alt: "Pieza", label: "Pieza" },
    { id: 10, src: "/static/pieza2.jpg", alt: "Pieza", label: "Pieza" },
    { id: 11, src: "/static/dentro.jpg", alt: "Pool", label: "Piscina" },
    { id: 12, src: "/static/banio.jpg", alt: "Baño", label: "Baño" },
    { id: 13, src: "/static/cocina2.webp", alt: "Cocina2", label: "Cocina2" },

    { id: 22, src: "/static/cocina-3.webp", alt: "Cocina3", label: "Cocina3" },

    {
      id: 15,
      src: "/static/condo-atras.webp",
      alt: "Condominio",
      label: "Condominio",
    },
    {
      id: 16,
      src: "/static/piscina-2.webp",
      alt: "Pool 2",
      label: "Piscina 2",
    },
    { id: 17, src: "/static/canchas.jpg", alt: "Canchas", label: "Canchas" },

    { id: 18, src: "/static/pieza3.jpg", alt: "Pieza2", label: "Pieza2" },
    {
      id: 19,
      src: "/static/camino-playa.jpg",
      alt: "Caminoaplaya",
      label: "Camino a playa",
    },
    {
      id: 6,
      src: "/static/vista-frente.jpg",
      alt: "Vista Playa",
      label: "Vista Playa",
    },
    { id: 21, src: "/static/pieza-3.jpg", alt: "Gym", label: "Gym" },
    {
      id: 14,
      src: "/static/camino-a-playa.jpg",
      alt: "Caminoaplaya",
      label: "Camino a playa",
    },

    {
      id: 8,
      src: "/static/climatizada.webp",
      alt: "Climatizada",
      label: "Climatizada",
    },
    {
      id: 24,
      src: "/static/edificio.jpeg",
      alt: "Edificio",
      label: "Edificio",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col gap-10 scroll-mt-25">
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
