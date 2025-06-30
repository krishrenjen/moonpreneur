import CircleImage from "./media/CircleImage";
import BrandButton from "./BrandButton";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Navigation from "./navbar/Navigation";

export default function Header() {
  return (
    <div className="top-0 sticky z-50 w-full">
      <div className="bg-brand-blue text-white text-center py-2 min-h-20 flex items-center justify-between gap-2 px-2">
        <div className="flex flex-row items-center justify-start gap-1 md:gap-2 w-fit">
          <div className="flex-row gap-1 justify-center items-center my-2 hidden lg:flex">
            <CircleImage src="/assets/home/countries/us.png" alt={"United States Flag"} />
            <CircleImage src="/assets/home/countries/uk.png" alt={"United Kingdom Flag"} />
            <CircleImage src="/assets/home/countries/canada.png" alt={"Canada Flag"} />
            <CircleImage src="/assets/home/countries/australia.png" alt={"Australia Flag"} />
            <CircleImage src="/assets/home/countries/germany.png" alt={"Germany Flag"} />
            <CircleImage src="/assets/home/countries/netherlands.png" alt={"Netherlands Flag"} />
          </div>
          <p className="flex-1 text-sm md:text-base !font-bold w-full p-0 m-0">
            Attend our in-person Robotics & Math <span className="text-yellow-200">FREE WORKSHOP</span> for your child <span className="font-normal">(7-18 yrs old)</span>
          </p>

          <BrandButton href="/login" variant="primary" className="w-48 px-2 !py-1 text-sm" label="No credit card needed" labelClassName="brightness-[500%]" newTab hoverEffect clickEffect>
            Reserve a Seat
          </BrandButton>
        </div>

        <div className="flex-col xl:flex-row items-center justify-center gap-x-4 gap-y-2 hidden md:flex">
          <div className="flex flex-row items-center justify-center gap-2 group">
            <FaEnvelope className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            <a href="mailto:inquiry@moonpreneur.com">inquiry@moonpreneur.com</a>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 whitespace-nowrap group">
            <FaPhoneAlt className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
            <a href="tel:+18555500571">+1 (855) 550-0571</a>
          </div>
        </div>
      </div>
      <header className="w-full z-50 flex-col items-center justify-center min-h-24">
        <div className="flex items-center justify-between w-full mx-auto px-4 md:px-8 bg-white h-24">
          <Link href="/" className="h-full py-2 flex items-center justify-center">
            <div className="hidden sm:flex items-center justify-center">
              <img src="/assets/svgs/moonpreneur-logo.svg" className="h-16" />
            </div>
            <div className="sm:hidden flex items-center justify-center">
              <img src="/assets/svgs/moonpreneur-logo-small.png" className="h-16" />
            </div>
          </Link>

          <div className="flex items-center justify-center gap-4">
            <div className="items-center justify-center gap-2 flex lg:hidden">
              <BrandButton href="/login" variant="outline" className="w-fit px-2 !py-1 text-sm md:text-base" newTab hoverEffect clickEffect>
                Login
              </BrandButton>
              <BrandButton href="/login" variant="primary" className="w-fit !py-1 text-sm md:text-base px-8" labelClassName="!text-xs" label="100% free" newTab hoverEffect clickEffect>
                Trial
              </BrandButton>
            </div>

            <Navigation />

            <div className="items-center justify-center gap-2 hidden lg:flex">
              <BrandButton href="/login" variant="outline" className="h-full px-2 !py-1" newTab hoverEffect clickEffect>
                Login
              </BrandButton>
              <BrandButton href="/login" variant="primary" className="h-full px-2 !py-1" label="100% free" newTab hoverEffect clickEffect>
                Book a Trial
              </BrandButton>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
