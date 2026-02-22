import CardComponent from "./CardComponent";

import number1 from "../../assets/images/Program-info/1.png";
import number2 from "../../assets/images/Program-info/2.png";
import number3 from "../../assets/images/Program-info/3.png";
import number4 from "../../assets/images/Program-info/4.png";
import number5 from "../../assets/images/Program-info/5.png";
import number6 from "../../assets/images/Program-info/6.jpg";
import number7 from "../../assets/images/Program-info/7.png";
import number8 from "../../assets/images/Program-info/8.png";
import number9 from "../../assets/images/Program-info/9.jpg";
import number10 from "../../assets/images/Program-info/10.jpg";

const Section3 = () => {
  const cardcontent = [
    {
      image: number1,
      ref: "/programinfo/1",
      title: "Plurals of Nouns ",
      desc: "By Mark - About the content",
    },
    {
      image: number2,
      ref: "/programinfo/2",
      title: "Syllables",
      desc: "By Mark - About the content",
    },
    {
      image: number3,
      ref: "/programinfo/3",
      title: "Suffixes",
      desc: "By Mark - About the content",
    },
    {
      image: number4,
      ref: "/programinfo/4",
      title: "Why Study Compound Words?",
      desc: "By Mark - About the content",
    },
    {
      image: number5,
      ref: "/programinfo/5",
      title: "Why Study Rhyming Words?",
      desc: "By Mark - About the content",
    },

    {
      image: number6,
      ref: "/programinfo/6",
      title: "Guide Words – Dictionary Skills and Building Vocabulary",
      desc: "By Mark - About the content",
    },
    {
      image: number7,
      ref: "/programinfo/7",
      title: "Dictation – An Important Literacy Teaching Tool",
      desc: "By Mark - About the content",
    },
    {
      image: number8,
      ref: "/programinfo/8",
      title: "Learning Benefits of Different Types of Activities",
      desc: "By Mark - About the content",
    },
    {
      image: number9,
      ref: "/programinfo/9",
      title: "Overview of Program 4",
      desc: "By Mark - About the content",
    },
    {
      image: number10,
      ref: "/programinfo/10",
      title: "Overview of Program 3",
      desc: "By Mark - About the content",
    },
  ];
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center py-24">
      {cardcontent.map((item) => (
        <CardComponent
          img={item.image}
          ref={item.ref}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Section3;
