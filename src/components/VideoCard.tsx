import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import type { VideoAsset } from "../lib/assets";

interface VideoCardProps {
  video: VideoAsset;
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Once the <video> element mounts (after the first play press), start it.
  useEffect(() => {
    if (!started) return;
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [started]);

  const togglePlay = () => {
    if (!started) {
      setStarted(true);
      return;
    }
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-800">
      {started && (
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          className="absolute inset-0 h-full w-full object-cover"
          muted={muted}
          playsInline
          loop
          preload="none"
          aria-label={video.description}
          onEnded={() => setPlaying(false)}
        />
      )}

      {!started && (
        <img
          src={video.poster}
          alt={video.description}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />

      <button
        type="button"
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center"
        aria-label={playing ? `Pause: ${video.title}` : `Play: ${video.title}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/95 text-navy-900 shadow-glow transition-transform group-hover:scale-105">
          {playing ? <Pause className="h-6 w-6" aria-hidden /> : <Play className="ml-0.5 h-6 w-6" aria-hidden />}
        </span>
      </button>

      {started && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/70 text-white backdrop-blur-sm"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />}
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-[15px] font-bold leading-tight text-white">{video.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/65">{video.description}</p>
      </div>
    </div>
  );
}
