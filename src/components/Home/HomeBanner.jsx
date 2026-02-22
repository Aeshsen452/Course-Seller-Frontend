import rectangle from "../../assets/images/Rectangle.png";
import eagle from "../../assets/images/coursesBannerImage.png";
import Button from "../Button/Button";
import cart from "../../assets/images/cart.png";
export default function HomeBanner() {
  const handleWatchVideos = () => {
    alert("button clicked");
  };

  const Buttonui = ({ text }) => {
    return (
      <button className="bg-[#F69837] flex gap-x-2 py-1 items-center px-3  rounded-3xl text-white cursor-pointer">
        <img src={cart} className="w-5 h-5"></img>
        <span className="">{text}</span>
      </button>
    );
  };

  return (
    <section className="relative overflow-hidden mb-10   bg-no-repeat bg-cover bg-top homeBgImage">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="container mx-auto px-6 lg:px-8 space-y-6 lg:space-y-8 text-center lg:text-left">
          <div className="">
            <h1 className="textFont text-4xl sm:text-5xl lg:text-7xl xl:text-8xl  leading-tight text-black  whitespace-nowrap">
              Welcome to Kitehawk Learning
            </h1>

            <h1 className="textFont text-4xl sm:text-5xl lg:text-7xl xl:text-8xl  leading-tight text-black  whitespace-nowrap">
              Spelling & Literacy Program
            </h1>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-gray-600  mx-auto lg:mx-0">
            No matter your age, we can help you improve your written and spoken
            English through phonics. <br></br> <br/>
            
            Kitehawk is a sequential, phonics-based
            spelling and literacy program that teaches students basic spelling
            skills and strategies needed to improve their literacy and be able
            to work independently.
          </p>

          {/* <p className="text-sm sm:text-base leading-relaxed text-gray-600  mx-auto lg:mx-0" >Need to be able to order books and courses on the opening page without reading introductory material</p> */}

          <div className="text-sm sm:text-base font-semibold flex flex-col items-start  gap-3">
            <Buttonui text="Buy Books (Aust Version) from Amazon" />
            <Buttonui text="Buy Books (USA Version) from Amazon" />
            <Buttonui text="Buy Books (Aust Version) Direct from Author" />
          </div>

          <Button text="Learn Online" onClick={handleWatchVideos} />
        </div>
        <div className="relative flex items-center h-[400px] lg:h-[600px] w-full">
          <div className="absolute inset-0 flex items-center justify-end">
            <img
              src={rectangle}
              alt="Background"
              className="w-[500px] sm:w-[500px] lg:w-[900px] xl:w-[700px] object-contain"
            />
          </div>
          <div className="relative z-20 flex items-center bottom-20 left-20 justify-center w-full">
            <img
              src={eagle}
              alt="Eagle"
              className="w-[300px] sm:w-[300px] lg:w-[400px] xl:w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
