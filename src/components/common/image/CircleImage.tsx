import clsx from "clsx";

export default function CircleImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={clsx("w-8 h-8 rounded-full overflow-hidden", className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}