import BrandButton from "@/components/common/BrandButton";
import ProgramSection from "@/components/common/forms/ProgramSection";
import CustomCarousel from "@/components/common/carousel/carousel";
import MapWrapper from "@/components/leaflet/MapWrapper";
import Callout from "@/components/common/callout";
import VideoSection from "@/components/home/VideoSection";
import ProgramCarousel from "@/components/home/ProgramCarousel";
import { getClientsAndPartners, getLearningKits, getInnovatorPrograms, getLocations, getVideoData } from "@/services/getMockData";
import DimensionalCarousel from "@/components/common/carousel/dimensionalCarousel";
import CircleImage from "@/components/common/media/CircleImage";

export default function Page() {
  const locations = getLocations();
  const innovatorPrograms = getInnovatorPrograms();
  const video_data = getVideoData();
  const clientsAndPartners = getClientsAndPartners();
  const learningKits = getLearningKits();

  return (
    <div>
      <style>
        {`
          @keyframes blink {
            0%, 10%, 90%, 100% {
              opacity: 1;
              box-shadow: 0 0 4px 2px rgba(255, 0, 0, 0.5);
            }
            45%, 50% {
              opacity: 0;
              box-shadow: 0 0 0px 0px rgba(255, 0, 0, 0);
            }
          }
        `}
      </style>

      <div className="w-full flex items-start justify-center min-h-screen mt-2 max-w-screen overflow-y-clip">
        <div className="w-full pt-2 flex flex-col items-center justify-center h-full">
          {/* Carousel with ProgramSection overlay */}
          <div className="flex gap-2 flex-col lg:relative w-full h-full lg:h-[600px] items-center justify-center overflow-hidden">
            {/* Carousel Background */}
            <CustomCarousel className="w-full h-full" delay={7500} autoPlay={true} dots>
              <img src="/assets/home/banner/map.webp" alt="Slide 1" className="w-full max-h-[600px] object-cover overflow-clip" />
              <img src="/assets/home/banner/top-banner-girl.webp" alt="Slide 2" className="w-full max-h-[600px] overflow-clip" />
            </CustomCarousel>

            {/* Overlaid ProgramSection */}
            <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-full max-w-lg px-4 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-xl">
                <ProgramSection
                  className="!max-w-lg"
                  tabs={[
                    <div className="flex flex-col items-center justify-center gap-0">
                      <div className="text-sm font-bold">Robotics</div>
                      <div className="text-xs">Free workshop in-person and online</div>
                    </div>,
                    <div className="flex flex-col items-center justify-center gap-0">
                      <div className="text-sm font-bold">Math</div>
                      <div className="text-xs flex flex-row gap-2 items-center justify-center">
                        Free trial online{" "}
                        <div
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "red",
                            borderRadius: "999999px",
                            animation: "blink 2s infinite",
                          }}
                        ></div>
                      </div>
                    </div>,
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-brand-purple-dark h-fit py-3 text-white font-base text-center text-lg flex flex-row items-center justify-center gap-4">
            <p>
              Discover the
              <span className="text-brand-yellow font-medium">&nbsp;next generation of innovators</span>, showcasing their
              <span className="text-brand-yellow font-medium">&nbsp;creativity and talent&nbsp;</span>
              with
              <span className="text-brand-yellow font-bold">&nbsp;MoonCampaigns&nbsp;</span>
            </p>
            <BrandButton href="/mooncampaigns/" hoverEffect newTab>
              <span className="text-sm">Learn More</span>
            </BrandButton>
          </div>

          {/* Innovator program */}
          <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8">
            <h1 className="text-3xl font-medium">Choose Your Stream Under the Innovator Program</h1>
            {/* replace with callout later */}
            <div className="text-lg">
              World-class education at affordable prices! Learning Starts at just <span className="font-bold">$99/month</span>!
            </div>
            <ProgramCarousel programs={innovatorPrograms} />
          </div>

          {/* Advanced programs */}
          <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8">
            <h1 className="text-3xl font-medium">Our Advanced Programs</h1>
            <ProgramCarousel programs={innovatorPrograms} />
          </div>

          {/* Map View */}
          <div className="flex flex-col items-center justify-center gap-4 w-full pt-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium max-w-6xl px-4">
              From Silicon Valley to Singapore—Our In-person Workshops are Lighting up 200+ Cities Across the Globe. Attend Now!
            </h1>
            <MapWrapper locations={locations} />
          </div>

          <div className="w-full bg-brand-purple-dark h-fit py-3 text-white text-sm sm:font-md md:text-lg text-center px-4 md:px-8 lg:px-16 xl:px-32">
            <p>
              We've proudly empowered over
              <span className="font-bold text-brand-yellow"> 66,000 students</span> across the&nbsp;
              <span className="font-medium text-brand-purple-light">USA, UK, Canada, and Australia</span> through our robotics and math workshops, and provided
              <span className="font-bold text-brand-yellow"> 14,000 students</span> with complimentary trial sessions.
            </p>
          </div>

          <Callout className="mt-8 text-lg text-center">
            Moonpreneur is expanding globally through its partner network.
            <br />
            If you're interested in becoming a partner,{" "}
            <a href="https://moonpreneur.com/resources/partners" className="underline text-brand-purple hover:text-brand-purple/90">
              learn more
            </a>
            .
          </Callout>
          {/* Video Section */}
          <VideoSection video_data={video_data} />

          <div className="mt-8 bg-[#F5E8F1] w-full flex flex-col items-center justify-center py-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium max-w-6xl px-4">Clients and Partners</h1>
            <DimensionalCarousel
              className="!w-full flex items-center justify-center"
              carouselClassName="!w-10/12 flex items-center justify-center"
              carouselContentClassName=""
              dynamicNumberOfItemsPerSlide={{ sm: 2, md: 2, lg: 3, xl: 4, "2xl": 5 }}
              dynamicArrows={{ sm: false, md: true, lg: true, xl: true, "2xl": true }}
              autoPlay
              delay={5000}
              slideDuration={25}
              align="start"
            >
              {clientsAndPartners.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 select-none">
                  <a href={item.link} className="select-none">
                    <CircleImage src={item.logo} alt={item.name} className="w-full h-auto object-contain select-none" />
                  </a>
                </div>
              ))}
            </DimensionalCarousel>
          </div>

          <div className="mt-8 flex flex-col w-full items-center justify-center gap-12">
            {/* Innovator program */}
            <div
              className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        flex flex-col lg:flex-row items-start justify-center w-4/5 xl:w-3/5 px-8 py-8 gap-x-16 gap-y-8"
            >
              <div className="flex-1/2 flex flex-col gap-2 items-start justify-start !h-full">
                <h1 className=" text-2xl font-semibold">What does the innovator program cover?</h1>
                <h2 className="text-xl font-medium text-brand-blue">Our curriculum builds skills for the future</h2>
                <p className="mt-2">Our Innovator Program aligns with future demands, training students in essential futuristic skills such as AI/ML, Robotics, Big Data, and App development.</p>
              </div>
              <div className="lg:hidden h-[1px] ml-[10%] w-[80%] bg-gray-300" />
              <div className="flex-1/2 flex flex-col gap-8 items-start justify-start h-full">
                <h2 className="text-xl font-medium text-brand-blue">Technical Skills</h2>
                <p className="-mt-4">Analytical thinking, logic & algorithm building, electronic components, coding, design thinking, and prototyping.</p>

                <h2 className="text-xl font-medium text-brand-blue">Power Skills</h2>
                <p className="-mt-4">Creative thinking, leadership, talent management, design and user experience, empathy and active listening, and financial literacy.</p>

                <h2 className="text-xl font-medium text-brand-blue">Advanced Math</h2>
                <p className="-mt-4">Advanced Math: Hands-on mathematical operations, fractions, and word problems for building real-life applications.</p>
              </div>
            </div>

            {/* Foundation in tech */}
            <div
              className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        flex flex-col lg:flex-row items-start justify-center w-4/5 xl:w-3/5 px-8 py-8 gap-x-16 gap-y-8"
            >
              <div className="flex-1/2 flex flex-col gap-2 items-start justify-start !h-full">
                <h1 className=" text-2xl font-semibold">Foundation In Technology</h1>
                <p className="mt-2">
                  Moonpreneur focuses on experiential learning because it allows children to feel, observe the process, and build an understanding of the concepts involved in turning ideas into
                  products.
                  <br />
                  <br />
                  The initial stage, which is nine months long, focuses on inculcating technical skills. Children learn and understand the technical aspects while using the Online Simulator. Next,
                  they move on to the Embedded Learner Board and Arduino Uno, which introduces them to other components involved in building a project. This process piques the interest of children.
                </p>
              </div>
              <div className="flex-1/2 flex flex-col gap-8 items-start justify-start h-full"></div>
            </div>

            {/* Prototype */}
            <div
              className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        flex flex-col lg:flex-row items-start justify-center w-4/5 xl:w-3/5 px-8 py-8 gap-x-16 gap-y-8"
            >
              <div className="flex-1/2 flex flex-col gap-2 items-start justify-start !h-full">
                <h1 className=" text-2xl font-semibold">Prototype</h1>
                <p className="mt-2">
                  The Prototyping stage is a dynamic three-month journey where students bring their product ideas to life using Moonpreneur’s specialized kits. Through Tiers Zero to Four, they
                  progress from basic tools like Micro:bit and sensors to advanced technologies like Arduino Uno. Applying the 5-Step Design Thinking Process—empathize, define, ideate, prototype, and
                  test—students master soldering, programming, and design. By the end, they transform their innovative ideas into functional prototypes.
                </p>
              </div>
              <div className="flex-1/2 flex flex-col gap-8 items-start justify-start h-full"></div>
            </div>

            {/* Power Skills */}
            <div
              className="rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        flex flex-col lg:flex-row items-start justify-center w-4/5 xl:w-3/5 px-8 py-8 gap-x-16 gap-y-8"
            >
              <div className="flex-1/2 flex flex-col gap-2 items-start justify-start !h-full">
                <h1 className=" text-2xl font-semibold">Power Skills</h1>
                <p className="mt-2">
                  At Moonpreneur, "POWER SKILLS" blend soft and hard skills to create an engaging, future-ready program for children.
                  <br />
                  <span className="font-medium">Team Building</span>: We foster collaboration, communication, and goal-oriented teamwork.
                  <br />
                  <br />
                  <span className="font-medium">Design Thinking </span>
                  <br />
                  Children learn the five-step process (empathize, define, ideate, prototype, test) to solve problems creatively.
                  <br />
                  <span className="font-medium">Business Plan Preparation</span>: We teach kids how to develop and present business plans to a global audience.
                </p>
              </div>
              <div className="flex-1/2 flex flex-col gap-8 items-start justify-start h-full"></div>
            </div>
          </div>

          <div className="mt-8 flex flex-col w-full items-center justify-center gap-12 bg-brand-blue">
            <div
              className="rounded-xl
                        flex flex-col lg:flex-row items-start justify-center w-4/5 xl:w-3/5 px-8 py-8 gap-x-16 gap-y-8 text-white"
            >
              <div className="flex-1/2 flex flex-col gap-2 items-start justify-start !h-full">
                <h1 className=" text-2xl font-semibold">MoonBattle</h1>
                <p className="mt-2">
                  MoonBattle is the flagship competition organized by Moonpreneur for students aged 7-18 years as part of its Innovator Program. It aims to provide project-based learning and
                  leadership training to students. The competition requires participants to work in teams and develop innovative projects. Teams pitch their projects to a global jury of angel
                  investors, successful entrepreneurs, and subject matter experts. MoonBattle provides students with valuable experience in critical thinking, problem-solving, leadership, and exposure
                  to innovation.
                </p>
              </div>
              <div className="flex-1/2 flex flex-col gap-8 items-start justify-start h-full"></div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center gap-8 px-8 py-16 bg-[#F4E8F0]">
            <div className="w-3/4 md:w-1/2 flex flex-col items-center justify-center gap-4">
              <h1 className=" text-2xl font-semibold text-center">Experiential Learning Kits from Moonpreneur</h1>
              <h2 className=" text-base md:text-lg text-center font-base">
                Moonpreneur Innovation Lab creates unique learning kits for hands-on learning for children. These kits are also a part of our curriculum.
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-6xl px-4">
              {learningKits.map((kit, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <a href={kit.link} className="w-fit rounded-full bg-white p-8 aspect-square flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <img src={kit.img} alt={kit.name + " - " + kit.description} className="w-36" />
                  </a>
                  <a href={kit.link} className="text-lg font-semibold mt-2" role="listitem" aria-level={1}>
                    {kit.name}
                  </a>
                  <p className="text-sm text-center">{kit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
