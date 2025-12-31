import Nav from "../molecules/Nav";
import Header from "../organism/Header";
import { lazy, Suspense } from "react";
import { LazySection } from "../../utils/LazySection";

const AboutUs = lazy(() => import("../organism/AboutUs"));
const Amenities = lazy(() => import("../organism/Amenities"));
const Gallery = lazy(() => import("../organism/Gallery"));
const Location = lazy(() => import("../organism/Location"));
const Footer = lazy(() => import("../organism/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Nav />
      <Header />

      <LazySection minHeight={400}>
        <Suspense fallback={null}>
          <AboutUs />
        </Suspense>
      </LazySection>

      <LazySection minHeight={400}>
        <Suspense fallback={null}>
          <Amenities />
        </Suspense>
      </LazySection>

      <LazySection minHeight={600}>
        <Suspense fallback={null}>
          <Gallery />
        </Suspense>
      </LazySection>

      <LazySection minHeight={600}>
        <Suspense fallback={null}>
          <Location />
        </Suspense>
      </LazySection>

      <LazySection minHeight={600}>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazySection>
    </div>
  );
}
