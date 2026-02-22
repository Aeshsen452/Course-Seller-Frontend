const Section4 = () => {
  const Cards = ({item}) => {
    return (
      <div className="w-[30%]  p-5 rounded-lg shadow-xl border flex justify-center items-center">
        <span className="font-bold">{item}</span>
      </div>
    );
  };

  const cardscontent =[
    "Single Program:  $150","All 4 Programs:  $500","3 Months : Trial"
    ,"Access to Updates","Full Source code","Support: 6 Months"
  ]

  return (
    <section className=" flex flex-col justify-center gap-y-5 mt-8 ">
      <h1 className="flex justify-center items-center text-3xl font-bold mb-5">How to Use the program</h1>
      <p className="px-64 text-center text-sm mb-5">
        Given most teachers’ knowledge of IT is rudimentary, Would <br/>“This
        allows you to download the Programs onto your Server, have full control
        to customise and maintain the Program according to your educational and
        specific requirements.”
      </p>

      <div className="flex flex-wrap gap-5 px-64 shrink-0 mb-5 ">
        {cardscontent.map(item => <Cards item={item} />)}
        
      </div>

      <h3 className="px-64 text-center">
        This allows you full control to customize, deploy, and maintain the
        program according to your specific educational or technical
        requirements.
      </h3>
    </section>
  );
};

export default Section4;
