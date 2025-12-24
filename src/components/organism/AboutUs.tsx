import Container from "../atoms/Container";
import PSection from "../atoms/PSection";
import TitleSection from "../atoms/TitleSection";
import DivIconsAbout from "../molecules/DivIconsAbout";
import imgAbout from "/static/vista-playa.jpg";
import {
  faLocationDot,
  faPeopleRoof,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:p-10 mt-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <TitleSection text="About Us" />

          <PSection
            text={`Breakers Plaza Condominiums offers luxurious beachfront living on South Padre Island. Our 17-story tower features 125 units with stunning Gulf views, providing a perfect blend of comfort and resort-style amenities. With a variety of floor plans and exceptional on-site facilities, we cater to those seeking both relaxation and an active lifestyle.

Located near the island’s best dining, shopping, and recreational spots, Breakers Plaza allows residents to enjoy the best of coastal living. Whether you're here for a seasonal getaway or a permanent home, we provide the ideal space to live, relax, and enjoy island life.`}
          />

          <div className="flex flex-row gap-4 sm:gap-15 justify-center">
            <DivIconsAbout icon={faUserShield} title="24/7 SECURITY" />
            <DivIconsAbout icon={faLocationDot} title="PRIME LOCATION" />
            <DivIconsAbout icon={faPeopleRoof} title="COMMUNITY" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={imgAbout}
            alt="Breakers Plaza Condominiums"
            className="w-full h-[260px] sm:h-[360px] lg:h-[480px] object-cover rounded-md"
          />
        </div>
      </div>
    </Container>
  );
}
