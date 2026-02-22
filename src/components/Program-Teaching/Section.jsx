import number1 from "../../assets/images/1.png";
import number2 from "../../assets/images/2.png";
import number3 from "../../assets/images/3.png";
import number4 from "../../assets/images/4.png";

const Section = () => {
  //   Container content
  const Container = ({ heading, desc, width }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-y-7 py-3">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p className={`px-4 text-center  ${width}`}>{desc}</p>
      </div>
    );
  };

  const heading1 = "Program Info";
  const heading2 = "Overview of the programs";
  const paragraph1 = `Kitehawk Learning's Spelling & Literacy Program is a structured, sequential, phonics-based learning solution designed to build strong spelling foundations and improve overall literacy. The program equips students with essential spelling skills and practical strategies that enable them to read, write, and learn independently with confidence.`;
  const paragraph2 = `Kitehawk Learning's Spelling & Literacy Program is a structured, sequential, phonics-based learning solution designed to build strong spelling foundations and improve overall literacy. The program equips students with essential spelling skills and practical strategies that enable them to read, write, and learn independently with confidence.The Kitehawk Learning Spelling & Literacy Program is organized into four progressive programs, each building upon the previous level to ensure steady and effective learning outcomes.`;

  const cardsContent = [
    {
      Title: "Program 01",
      Desc: "Program 1 focuses on foundational phonics and basic spelling patterns.",
      Img: number1,
    },
    {
      Title: "Program 02",
      Desc: "Program 2 strengthens word recognition, sound-letter relationships, and spelling accuracy.",
      Img: number2,
    },
    {
      Title: "Program 03",
      Desc: "Program 3 introduces more complex spelling rules, word structures, and application strategies.",
      Img: number3,
    },
    {
      Title: "Program 04",
      Desc: "Program 4 reinforces advanced spelling skills and promotes independent literacy practice.",
      Img: number4,
    },
  ];

  const Cards = ({ Title, Desc, Img, alignment }) => {
    return (
      <div className={`flex ${alignment} px-36 `}>
        <div className="flex items-center justify-end relative ">
          <img src={Img} alt="01" className="w-16 h-16 absolute left-8" />
          <div className="border px-12 py-4 ml-16 rounded-lg shadow-2xl flex flex-col gap-y-3">
            <h1 className="text-lg font-bold">{Title}</h1>
            <p className=" w-full h-10 text-sm">{Desc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className=" flex  flex-col p-5 gap-y-10">
      <Container heading={heading1} desc={paragraph1} />
      <Container heading={heading2} desc={paragraph2} width="w-[80%]" />

      <div className="flex flex-col gap-y-8 py-8">
        {cardsContent.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <Cards
                Title={item.Title}
                Desc={item.Desc}
                Img={item.Img}
                alignment="justify-start"
              />
            );
          }
          return (
            <Cards
              Title={item.Title}
              Desc={item.Desc}
              Img={item.Img}
              alignment="justify-end"
            />
          );
        })}
      </div>

      <div className="flex justify-center items-center">
        <p className="w-[70%] px-16 text-center ">
          Each program follows a step-by-step approach, making it suitable for
          learners at different stages while maintaining continuity across
          levels.
        </p>
      </div>
    </section>
  );
};

export default Section;
