import coursesBannerImage from "../../assets/images/coursesBannerImage.png";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="relative w-full coursesBg overflow-hidden mb-10">
      <div className="relative z-10 flex items-center">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left space-y-4">
              <h1 className="textFont text-3xl sm:text-4xl lg:text-5xl xl:text-8xl  leading-tight text-black">
               Program Info 
              </h1>

              <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Kitehawk Learning’s Spelling & Literacy Program is a structured, sequential, phonics-based learning solution designed to build strong spelling foundations and improve overall literacy. The program equips students with essential spelling skills and practical strategies that enable them to read, write, and learn independently with confidence.
              </p>

              <p className="font-semibold text-sm sm:text-base">
                Let build your learning with KiteHawk together
              </p>

              <div className="pt-2 pb-5">
                <Button text="Learn" />
              </div>
            </div>

            <div className="flex justify-center items-center mt-6 lg:mt-0">
              <div className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem]">
                <img
                  src={coursesBannerImage}
                  alt="Kite Hawk Bird"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner