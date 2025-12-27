import {
  faCarRear,
  faCubes,
  faDumbbell,
  faPaw,
  faPersonSwimming,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../atoms/Container";
import PSection from "../atoms/PSection";
import TitleSection from "../atoms/TitleSection";
import CardAmenities from "../molecules/CardAmenities";
import MotionCard from "../../utils/MotionCard";

export default function Amenities() {
  return (
    <Container>
      <div className="flex flex-col gap-10 scroll-mt-25" id="amenities">
        <MotionCard>
          <div className="flex flex-col text-center gap-10">
            <TitleSection text="Amenities" />
            <PSection text="Everything you need for a perfect stay" />
          </div>
        </MotionCard>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <MotionCard preset="scaleIn">
              <CardAmenities
                icon={faUmbrellaBeach}
                title="Beach Access"
                text="Direct route to the white sands of South Padre Island."
              />
            </MotionCard>
            <MotionCard preset="scaleIn" delay={0.5}>
              <CardAmenities
                icon={faPersonSwimming}
                title="Private Pools"
                text="Large heated swimming pool with relaxation area and pool overlooking the sea."
              />
            </MotionCard>
            <MotionCard preset="scaleIn" delay={0.9}>
              <CardAmenities
                icon={faCarRear}
                title="Parking lot"
                text="Secure and covered parking space for residents"
              />
            </MotionCard>
            <MotionCard preset="scaleIn" delay={1.3}>
              <CardAmenities
                icon={faPaw}
                title="Pet Policy"
                text="Pets Allowed with Restrictions"
              />
            </MotionCard>
            <MotionCard preset="scaleIn" delay={1.7}>
              <CardAmenities
                icon={faDumbbell}
                title="Fitness Center"
                text="Modern equipment to maintain your exercise routine"
              />
            </MotionCard>
            <MotionCard preset="scaleIn" delay={2.1}>
              <CardAmenities
                icon={faCubes}
                title="Recreation Room"
                text="An inviting recreation room created for relaxation and entertainment."
              />
            </MotionCard>
          </div>
        </div>
      </div>
    </Container>
  );
}
