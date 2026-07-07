import SectionHeading from "./SectionHeading";
import VideoCard from "./VideoCard";
import { showcaseVideos } from "../lib/assets";

export default function VideoShowcase() {
  return (
    <section
      id="practical-lab"
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-28"
      aria-label="Practical training footage"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-circuit-lines bg-circuit opacity-40"
        aria-hidden
      />
      <div className="container-tight relative">
        <SectionHeading
          eyebrow="Practical Lab"
          title="See the Work. Learn by Doing."
          description="Practical exposure is central to developing confidence with modern mobile hardware."
          light
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {showcaseVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
