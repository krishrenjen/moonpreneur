import { LuPhone } from "react-icons/lu";
import CircleImage from "../image/CircleImage";
import BrandButton from "./buttons/BrandButton";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="h-24" /> {/* Spacer: adjust to header height */}
      <div className="bg-brand-blue text-white text-center py-2 h-20 flex items-center justify-between gap-2 px-2">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="flex-row gap-1 justify-center items-center my-2 hidden md:flex">
            <CircleImage src="/assets/home/countries/us.png" alt={"United States Flag"}/>
            <CircleImage src="/assets/home/countries/uk.png" alt={"United Kingdom Flag"}/>
            <CircleImage src="/assets/home/countries/canada.png" alt={"Canada Flag"}/>
            <CircleImage src="/assets/home/countries/australia.png" alt={"Australia Flag"}/>
            <CircleImage src="/assets/home/countries/germany.png" alt={"Germany Flag"}/>
            <CircleImage src="/assets/home/countries/netherlands.png" alt={"Netherlands Flag"}/>
          </div>
          <p className="!font-bold">Attend our in-person Robotics & Math <span className="text-yellow-200">FREE WORKSHOP</span> for your child <span className="font-normal">(7-18 yrs old)</span></p>
          <BrandButton href="/login" variant="primary" className="w-48 px-2 !py-1 text-sm" label="No credit card needed" labelClassName="brightness-[500%]" newTab hoverEffect clickEffect>Reserve a Seat</BrandButton> 
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center gap-2">
            <FaEnvelope />
            <a href="mailto:inquiry@moonpreneur.com">inquiry@moonpreneur.com</a>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <FaPhoneAlt />
            <a href="tel:+18555500571">+1 (855) 550-0571</a>
          </div>
        </div>
        

          
      </div>
      <header className="fixed top-0 w-full z-50 flex-col items-center justify-center h-24">
        
        <div className="flex items-center justify-between w-full mx-auto px-8 bg-white h-24">
          <Link href="/" className="h-full py-2 flex items-center justify-center">
            <img src="/assets/svgs/moonpreneur-logo.svg" className="h-16"/>
          </Link>

          <div className="flex items-center justify-center gap-2">
            <BrandButton href="/login" variant="outline" className="w-fit px-2 !py-1" newTab hoverEffect clickEffect>Login</BrandButton>
            <BrandButton href="/login" variant="primary" className="w-fit px-2 !py-1" label="100% free" newTab hoverEffect clickEffect>Book a Trial</BrandButton>

          </div>
        </div>
        
      </header>
    </>
  );
}
