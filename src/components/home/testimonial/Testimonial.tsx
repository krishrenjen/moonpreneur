import { FaStar, FaStarHalf } from "react-icons/fa";
import SpeechBubble from "./SpeechBubble";

type TestominalProps = {
  name: string;
  numberOfStars: number;
  text: string;
  likes: number;
};

export default function Testimonial(props: TestominalProps) {
  const { name, numberOfStars, text, likes } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-2">
        {[...Array(Math.min(5, Math.floor(numberOfStars)))].map((_, index) => (
          <span key={index} className="text-yellow-500">
            <FaStar />
          </span>
        ))}
        {Math.min(numberOfStars, 5) % 1 >= 0.2 && (
          <span className="text-yellow-500">
            <FaStarHalf />
          </span>
        )}
      </div>
      <SpeechBubble>
        <div className="text-gray-700">
          <p className="text-lg font-semibold">{name}</p>
        </div>
      </SpeechBubble>
      <p className="text-center text-gray-700">{text}</p>
      <p className="text-sm text-gray-500">- {name}</p>
      <p className="text-sm text-gray-500">Likes: {likes}</p>
    </div>
  );
}
