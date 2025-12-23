import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../atoms/Container";
import TitleSection from "../atoms/TitleSection";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PSection from "../atoms/PSection";
import TestimonialsCarouselPremium from "../molecules/Testimonials";

export default function Location() {
  return (
    <Container>
      <div className="flex flex-col gap-10 text-center">
        <TitleSection text="Location" />
        <div className="mx-auto w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.15)] px-6 py-12 md:px-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-500/30">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-emerald-500 text-3xl"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                708 Padre Blvd, South Padre Island, TX
              </p>

              <div className="mx-auto md:mx-0 mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600" />
            </div>
          </div>

          <div className="mt-6">
            <PSection text="Steps from the beach and close to restaurants, bars and tourist attractions." />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition"
              href="https://www.google.com/maps?q=708+Padre+Blvd,+South+Padre+Island,+TX"
              target="_blank"
              rel="noreferrer">
              Open in Google Maps
            </a>
            <button
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white hover:bg-white/15 transition border border-white/10"
              onClick={() =>
                navigator.clipboard.writeText(
                  "708 Padre Blvd, South Padre Island, TX"
                )
              }>
              Copy address
            </button>
          </div>
        </div>
      </div>
      <TestimonialsCarouselPremium />
    </Container>
  );
}
