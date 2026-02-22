import videoicon from "../../assets/images/videoicon.png";
import Card from "../Card/Card";
import video from "../../assets/video/dummy-video.mp4";
export default function CraftedPremiumGrade() {
  // const features = [
  //   {
  //     title: "Lorem ipsum is dummy dollar",
  //     image: videoicon,
  //   },
  //   {
  //     title: "Lorem ipsum is dummy dollar",
  //     image: videoicon,
  //   },
  //   {
  //     title: "Lorem ipsum is dummy dollar",
  //     image: videoicon,
  //   },
  // ];
  return (
    <div className="space-y-5 mb-10">
      <h1 className="text-center font-bold text-5xl">
        Choose the best for you
      </h1>
      <p className="text-center text-sm">
        Quick overview of Kitehawk LMS Show how easy it is to create courses,
        assign tasks, track progress. Crafted with premium-grade features
      </p>

      <div className="flex  p-2 justify-evenly items-center lg: flex-wrap">
        {Array(3)
          .fill(0)
          .map((i, index) => {
            return (
              <iframe
                key={index}
                src="https://player.cloudinary.com/embed/?cloud_name=dyhrd2zdv&public_id=dummy-video_a6apbm&profile=cld-default"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowfullScreen
                frameborder="0"
              ></iframe>
            );
          })}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto px-6 lg:px-8">
        {features.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            imageClassName="object-contain"
          />
        ))}

        <input type="" />
      </div> */}
    </div>
  );
}
