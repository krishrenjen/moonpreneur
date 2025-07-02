import BrandButton from "@/components/common/button/BrandButton";
import Callout from "@/components/common/callout";
import ProgramSection from "@/components/common/forms/ProgramSection";
import ReserveSeatForm from "@/components/common/forms/ReserveSeatForm";
import VideoPreview from "@/components/common/media/Video/VideoPreview";
import { Pricing } from "@/components/common/pricing/Pricing";
import { PricingSelector } from "@/components/common/pricing/PricingSelector";
import { CycleValue } from "@/components/common/pricing/CycleValue";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Testimonial from "@/components/home/testimonial/Testimonial";

export default function Robotics() {
  return (
    <div className="w-full flex items-start justify-center min-h-screen mt-2 max-w-screen overflow-y-clip">
      <div className="w-full pt-2 flex flex-col items-center justify-center h-full">
        {/* hero */}

        <div className="flex gap-2 flex-col lg:relative w-full h-full lg:h-[600px] items-center justify-center overflow-hidden">
          <img
            src="/assets/home/banner/top-banner-girl.webp"
            alt="Slide 2"
            className="w-full max-h-[600px] overflow-clip"
          />
          {/* Overlaid ProgramSection */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-full max-w-lg px-4 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-xl">
              <ReserveSeatForm className="!max-w-lg" />
            </div>
          </div>
        </div>

        {/* info section */}

        <div className="w-full px-4 py-8 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-medium">Robotics Innovator Program</h1>
          <h2 className="text-2xl font-medium">
            Introduce your Child to the World of Robotics and Coding
          </h2>

          <div className="flex flex-row items-center justify-center px-4 py-2 rounded-md bg-brand-blue  mb-4">
            <AiOutlineInfoCircle className="text-white text-2xl mr-2" />
            <p className="text-white text-base">
              This program is only for ages 7-18
            </p>
          </div>

          <Callout className="max-w-4xl text-lg mb-4">
            Robotics being an important part of STEM (Science, Technology,
            Engineering, and Mathematics) can introduce your child to
            programming and the world of technology at an early age to help them
            prepare for the future of work and get success in the dynamic job
            markets.
          </Callout>

          <h2 className="text-3xl font-medium mb-4">
            Why is Robotics Important?
          </h2>
          <div className="flex flex-row items-stretch justify-center gap-4 flex-wrap">
            <Card
              title="Enhances Problem Solving Skills"
              description="Robotics presents children with challenges, pushing them to engage in critical thinking and devise innovative solutions."
              img="/assets/robotics/enhances-problem.webp"
            />
            <Card
              title="Promotes Creativity"
              description="Kids can design, build, and program robots, which stimulates their imagination and creativity."
              img="/assets/robotics/promote-creativity.webp"
            />
            <Card
              title="Teaches Programming Skills"
              description="Children learn coding with robotics, which is an essential skill in today's digital AI world."
              img="/assets/robotics/programming.webp"
            />
            <Card
              title="Improves Teamwork and Social Skills"
              description="Robotics for kids involves collaboration, helping them to develop better communication and teamwork abilities."
              img="/assets/robotics/teamwork.webp"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-orange-100 h-fit py-16 px-4 w-screen rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4 max-w-3xl text-center">
            Moonpreneur - turning your child's robotics dreams into reality
          </h2>
          <p className="text-lg mb-4 max-w-4xl text-center">
            Moonpreneur, a Silicon Valley-based company, is offering innovative
            online robotics classes for kids ages 7-18 designed by industry
            leaders and subject matter experts. The course encompasses
            project-based learning to develop soft, technical, and
            entrepreneurial skills in your child. It includes hands-on projects
            and instructor-led training to ensure learning robotics for kids is
            fun.
          </p>
          <h2 className="text-3xl font-semibold mb-4 max-w-3xl text-center mt-4">
            Why Moonpreneur?
          </h2>

          <div className="flex flex-row items-stretch justify-center gap-4 flex-wrap">
            <Card
              title="Vedic Teaching Approach"
              description="Robotics presents children with challenges, pushing them to engage in critical thinking and devise innovative solutions."
              img="/assets/robotics/vedic.webp"
            />
            <Card
              title="Entrepreneurial Education"
              description="Blend of Technical, Soft, and Entrepreneurial Skills, Teaches technical, soft, and business skills for a well-rounded mindset."
              img="/assets/robotics/entrepreneurial.webp"
            />
            <Card
              title="Hands-on Learning with Fun Projects"
              description="Learn by Doing Engages kids through fun, practical projects that reinforce learning."
              img="/assets/robotics/hands-on-learning.webp"
            />
            <Card
              title="Future-Ready Skills for a Changing World"
              description="Prepares kids with tech and innovation skills for tomorrow's careers."
              img="/assets/robotics/future-ready.webp"
            />
          </div>
        </div>

        {/* program outcome */}

        <div
          className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        flex flex-col lg:flex-row items-start justify-center w-4/5 xl:w-2/3 px-8 py-8 gap-x-16 gap-y-8"
        >
          <div className="flex-1/2 justify-start items-start flex flex-col gap-4">
            <h2 className="text-3xl font-semibold mb-4">Program Outcomes</h2>
            <p>
              At the end of this online robotics course, your child will be able
              to solve real-world problems using the technical knowledge of
              robotics along with entrepreneurial and creative thinking.
            </p>
            <div className="flex items-center justify-center px-8">
              <VideoPreview videoId={"tv05UZGw9wA"} />
            </div>
            <BrandButton
              className="flex flex-row gap-2 items-center justify-center mt-4"
              variant="secondary"
              href="/innovator-program/robotics#reserve-seat"
              hoverEffect
              clickEffect
            >
              <FaCalendarAlt />
              Book a Free Trial
            </BrandButton>
          </div>
          <div className="flex-1/2 justify-start items-start gap-4 flex flex-col">
            <h3 className="text-2xl font-semibold text-brand-blue">
              Basics of Electronics
            </h3>
            <ul className="list-disc pl-6 -mt-2">
              <li>Learn about Electrical circuits</li>
              <li>Learn about Microcontrollers</li>
              <li>Learn about Sensors</li>
            </ul>

            <h3 className="text-2xl font-semibold text-brand-blue">
              Design Thinking and Prototyping Products
            </h3>
            <ul className="list-disc pl-6 -mt-2">
              <li>Build with Robotics Kit</li>
              <li>Build a Draft Prototype</li>
              <li>Learn 5-step Design Thinking</li>
            </ul>

            <h3 className="text-2xl font-semibold text-brand-blue">
              Programming (Coding)
            </h3>
            <ul className="list-disc pl-6 -mt-2">
              <li>Learn C++ and Python</li>
              <li>Learn about Statements & Variables</li>
              <li>Learn about Arduino coding</li>
            </ul>

            <h3 className="text-2xl font-semibold text-brand-blue">
              Leadership and Go To Market
            </h3>
            <ul className="list-disc pl-6 -mt-2">
              <li>Develop Teamwork Skills</li>
              <li>Learn Soft-skills</li>
              <li>Learn Business Plan Preparation</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-orange-100 h-fit py-16 px-4 w-screen rounded-lg flex flex-col items-center justify-center">
          <h3 className="text-brand-blue font-light text-lg">
            FLEXIBLE AND AFFORDABLE LEARNING SOLUTIONS
          </h3>
          <h2 className="font-medium text-4xl">Choose Your Pricing Plan</h2>
          <h3 className="font-medium text-lg">
            Unlock Over <span className="font-semibold text-2xl">25%</span>{" "}
            Savings with Our Yearly Plan
          </h3>

          <Pricing allowedCycles={["Monthly", "Annually"]}>
            <PricingSelector />
            <div
              className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        flex flex-col bg-white/10 backdrop-blur-3xl items-center justify-center w-1/6 px-8 py-8 gap-x-16 gap-y-8"
            >
              <h2 className="text-lg font-medium">ROBOTICS</h2>
              <h2 className="">
                <span className="text-3xl text-brand-blue font-semibold">
                  $<CycleValue monthly={149} annually={1299} />
                </span>
                <span className="text-sm">
                  /
                  <CycleValue monthly={"month"} annually={"year"} />
                </span>
              </h2>
              <h2>
                <CycleValue monthly={" "} annually={"$108.25/month"} />
              </h2>

              <BrandButton
                variant="primary"
                href="/login"
                className="w-fit px-8 !py-1 text-sm md:text-base"
                newTab
                hoverEffect
                clickEffect
              >
                Get Started
              </BrandButton>
            </div>
          </Pricing>
        </div>

        <Testimonial
          name="John Doe"
          numberOfStars={3.4}
          text="This program has changed my life!"
          likes={10}
        />
      </div>
    </div>
  );
}

export function Card({
  title,
  img,
  description,
}: {
  title: string;
  img?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-start gap-2 p-4 bg-white shadow-md rounded-lg max-w-72 hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold mb-2 text-center text-brand-blue h-[3rem]">
        {title}
      </h3>
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full max-w-60 h-40 object-cover rounded mb-2"
        />
      )}
      {description && (
        <p className="text-gray-700 text-center">{description}</p>
      )}
    </div>
  );
}
