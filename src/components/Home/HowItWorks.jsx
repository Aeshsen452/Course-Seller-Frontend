import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
export default function HowItWorks() {
  const steps = [
    {
      image: one,
      title: "Sign up and create a profile",
      description:
        "Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text. Lorem ipsum is a dummy text.",
    },
    {
      image: two,
      title: "Browse and select the online courses",
      description:
        "single courses or the Bundle of 4 courses",
    },
    {
      image: three,
      title: "Purchase Course",
      description:
        "Schools or institutions with access to own server",
    },
    {
      image: four,
      title: "Start Learning",
      description:
        "Start Learning",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-sm md:text-base  mx-auto">
           Ensure you are ordering Australian or USA Program.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1; 
            return (
              <div
                key={index}
                className={`relative flex ${
                  isEven ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`absolute top-6 z-10 ${
                    isEven ? "right-4 md:right-6" : "left-4 md:left-6"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg object-cover"
                  />
                </div>
                <div
                  className={`bg-white rounded-lg shadow-sm border border-gray-100 py-6 md:py-8 px-6 md:px-8  ${
                    isEven
                      ? "mr-10 md:mr-20 pr-16 md:pr-20"
                      : "ml-10 md:ml-20 pl-16 md:pl-20"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
