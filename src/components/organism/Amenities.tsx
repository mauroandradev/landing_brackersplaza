import {
  faBuilding,
  faCarRear,
  faClock,
  faCubes,
  faDumbbell,
  faPaw,
  faPersonSwimming,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PSection from "../atoms/PSection";
import TitleSection from "../atoms/TitleSection";
import CardAmenities from "../molecules/CardAmenities";
import MotionCard from "../../utils/MotionCard";

export default function Amenities() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="mx-auto py-5">
        <div className="flex flex-col gap-10 scroll-mt-25">
          <MotionCard>
            <div className="flex flex-col text-center gap-10">
              <TitleSection text="Amenities" />
              <PSection text="Everything you need for a perfect stay" />
            </div>
          </MotionCard>
          <div className="flex flex-col p-5">
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
              <MotionCard preset="scaleIn" delay={0.7}>
                <CardAmenities
                  icon={faCarRear}
                  title="Parking lot"
                  text="Secure and covered parking space for residents"
                />
              </MotionCard>
              <MotionCard preset="scaleIn" delay={0.9}>
                <CardAmenities
                  icon={faPaw}
                  title="Pet Policy"
                  text="Pets Allowed with Restrictions"
                />
              </MotionCard>
              <MotionCard preset="scaleIn" delay={1.1}>
                <CardAmenities
                  icon={faDumbbell}
                  title="Fitness Center"
                  text="Modern equipment to maintain your exercise routine"
                />
              </MotionCard>
              <MotionCard preset="scaleIn" delay={1.2}>
                <CardAmenities
                  icon={faCubes}
                  title="Recreation Room"
                  text="An inviting recreation room created for relaxation and entertainment."
                />
              </MotionCard>
            </div>
            <MotionCard preset="fadeUp" delay={0.3}>
              <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <div className="bg-slate-900 px-6 py-5 text-center text-white">
                  <h3 className="text-2xl font-bold">Amenities & Office Hours</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Plan your day and enjoy our facilities
                  </p>
                </div>
                <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="flex items-center gap-5 px-7 py-9 lg:px-10">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FontAwesomeIcon icon={faClock} className="text-2xl" />
                    </div>
                    <div>
                      <p className="mb-1 text-lg font-semibold text-slate-900">
                        Common Areas
                      </p>
                      <p className="text-2xl font-bold tracking-tight text-emerald-700 lg:text-3xl">
                        7:00 AM – 11:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 px-7 py-9 lg:px-10">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FontAwesomeIcon icon={faBuilding} className="text-2xl" />
                    </div>
                    <div>
                      <p className="mb-1 text-lg font-semibold text-slate-900">
                        Office Hours
                      </p>
                      <p className="text-2xl font-bold tracking-tight text-emerald-700 lg:text-3xl">
                        8:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
