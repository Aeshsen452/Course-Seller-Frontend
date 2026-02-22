import logoimage from "../../assets/images/logo.png";
import CardComponent from "./CardComponent";
import Number1 from "../../assets/images/Teaching/1.jpg";
import Number2 from "../../assets/images/Teaching/2.png";
import Number3 from "../../assets/images/Teaching/3.png";
import Number4 from "../../assets/images/Teaching/4.png";
import Number5 from "../../assets/images/Teaching/5.png";

const Section5 = () => {
  const cardcontent = [
    {
      image: Number1,
      ref: "/teaching/1",
      title: "Repetition – Practise Practise Practise!",
      desc: "",
    },
    {
      image: Number2,
      ref: "/teaching/2",
      title: "Teaching Tips for Aboriginal Students",
      desc: "",
    },
    {
      image: Number3,
      ref: "/teaching/3",
      title: "Listening Skills Need to be Taught!",
      desc: "",
    },
    {
      image: Number4,
      ref: "/teaching/4",
      title: "Kitehawk – The Advantages of the Online Program",
      desc: "",
    },
    {
      image: Number5,
      ref: "/teaching/5",
      title: "Attaining Functional Literacy",
      desc: "",
    },
  ];

  return (
    <section className=" flex flex-col gap-y-8 m-20">
      <h1 className="text-center text-3xl font-bold">Teaching Tips</h1>
      <p className="text-center text-sm">
        Quick overview of Kitehawk LMS Teaching Tips for some learning
      </p>
      <div className="flex flex-wrap gap-10 justify-center items-center px-20">
        {cardcontent.map((item, index) => (
          <CardComponent
            img={item.image}
            ref={item.ref}
            desc={item.desc}
            index={index}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Section5;
