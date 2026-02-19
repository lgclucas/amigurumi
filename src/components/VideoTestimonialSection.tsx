import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import Player from "@vimeo/player";

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    player.on("play", onPlay);
    player.on("pause", onPause);

    return () => {
      try {
        player.off("play", onPlay);
        player.off("pause", onPause);
        player.destroy();
      } catch {
        // ignore
      }
      playerRef.current = null;
    };
  }, []);

  const ensureAudioOn = async () => {
    // Browser policies allow audio only after a user gesture.
    // This runs inside the click handler to reliably unmute and set volume.
    const player = playerRef.current;
    if (!player) return;

    try {
      await player.setMuted(false);
    } catch {
      // ignore
    }

    try {
      await player.setVolume(1);
    } catch {
      // ignore
    }
  };

  const handlePlayClick = () => {
    const player = playerRef.current;
    if (!player) return;

    if (!hasStarted) setHasStarted(true);

    (async () => {
      try {
        if (isPlaying) {
          await player.pause();
          return;
        }

        await ensureAudioOn();
        await player.play();
      } catch {
        // If playback fails (policy/network), we keep UI stable and let user retry.
      }
    })();
  };

  return (
    <div 
      className="relative rounded-2xl overflow-hidden shadow-card border border-border bg-card cursor-pointer"
      onClick={handlePlayClick}
    >
      <div style={{ padding: "55% 0 0 0", position: "relative" }}>
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&controls=0&muted=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          {...{ playsInline: true } as any}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={title}
        />
      </div>

      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          hasStarted && isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="bg-primary/90 hover:bg-primary rounded-full p-4 sm:p-6 shadow-lg transition-all duration-300 hover:scale-110">
          {isPlaying ? (
            <Pause className="w-8 h-8 sm:w-12 sm:h-12 text-primary-foreground" fill="currentColor" />
          ) : (
            <Play className="w-8 h-8 sm:w-12 sm:h-12 text-primary-foreground ml-1" fill="currentColor" />
          )}
        </div>
      </div>

      {!hasStarted && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
          <div className="h-full w-0 bg-primary"></div>
        </div>
      )}
    </div>
  );
};

const videos = [
  { videoId: "1155638019", title: "Depoimento Renata" },
  { videoId: "1160902227", title: "Depoimento Bruna" },
];

const VideoTestimonialSection = () => {
  return (
    <section className="py-12 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Veja o que dizem sobre o material
          </h2>
          <p className="text-muted-foreground">
            Depoimentos reais de quem já transformou sua vida com amigurumis
          </p>
        </div>

        <div className="max-w-lg mx-auto space-y-6">
          {videos.map((video) => (
            <div key={video.videoId}>
              <VideoPlayer videoId={video.videoId} title={video.title} />
              <p className="text-center text-sm text-muted-foreground mt-3">
                👆 Clique para assistir o depoimento
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
