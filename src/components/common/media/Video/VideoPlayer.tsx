export default function VideoPlayer({ videoId, controls = true, autoplay = false, mute = true }: { videoId: string; controls?: boolean; autoplay?: boolean; mute?: boolean }) {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=${controls ? 1 : 0}&autoplay=${autoplay ? 1 : 0}&mute=${mute ? 1 : 0}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
}
