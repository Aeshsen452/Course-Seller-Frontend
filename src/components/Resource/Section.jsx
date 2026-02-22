import { useNavigate } from "react-router-dom";
const Section = () => {

  const navigate = useNavigate()
  const CardsButton = ({ text,navigating}) => { 
    return <button onClick={()=>{
      navigate(`/resources/program/${navigating}`)
    }} className="px-5 bg-blue-600 py-2 rounded-3xl text-white font-medium justify-center items-center">{text}</button>;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-7 py-3 mt-5">
      <h1 className="text-3xl font-bold">Home Schooling Literacy Program</h1>
      <p className={`px-4 text-center`}>
        The Kitehawk Literacy Program is a popular home school Program in
        Australia. The five programs have many exercises throughout that are
        consistently structured. This gives students the confidence to tackle
        more difficult activities or exercises, as the degree of difficulty
        increases gradually, easing the workload on parents. There are short
        summaries of concepts in the Resources section on the free website, that
        need to be taught, including the answers for the print program. As the
        author, I am keen for feedback and questions as this helps improve the
        program for parents and students.
      </p>
      <h1 className="text-2xl font-bold">
        Click on the buttons below to view the resources for each level within
        the Kitehawk Program.
      </h1>

      <div className=" px-56 flex flex-wrap gap-4 flex-shrink-0 py-8">
        {Array(5)
          .fill("Program")
          .map((item, index) => (
            <CardsButton text={item + " " + (index + 1)} navigating = {index+1} />
          ))}
      </div>
    </div>
  );
};

export default Section;
