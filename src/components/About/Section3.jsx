const Section3 = () => {
  const cardData = [
    {
      heading: "Program 1",
      subheading: "Print & Online",
      para1:
        " Suitable for average Grade/Year 4 students (about 9 years of age) to adults.The 35 week program has 34 Units and 370 activities.",
      para2:
        " Program 2 covers Spelling, Phonics, Spelling Skills, Synonyms, Antonyms, Syllables, Prefixes, Suffixes, Homophones, Grammar, Punctuation,Dictionary Skills and more.",
    },
    {
      heading: "Program 2",
      subheading: "Print & Online",
      para1:
        " Suitable for average Grade/Year 4 students (about 9 years of age) to adults.The 35 week program has 34 Units and 370 activities.",
      para2:
        " Program 2 covers Spelling, Phonics, Spelling Skills, Synonyms, Antonyms, Syllables, Prefixes, Suffixes, Homophones, Grammar, Punctuation,Dictionary Skills and more.",
    },
    {
      heading: "Program 3",
      subheading: "Print & Online",
      para1:
        " Suitable for average Grade/Year 4 students (about 9 years of age) to adults.The 35 week program has 34 Units and 370 activities.",
      para2:
        " Program 2 covers Spelling, Phonics, Spelling Skills, Synonyms, Antonyms, Syllables, Prefixes, Suffixes, Homophones, Grammar, Punctuation,Dictionary Skills and more.",
    },
    {
      heading: "Program 4",
      subheading: "Print & Online",
      para1:
        " Suitable for average Grade/Year 4 students (about 9 years of age) to adults.The 35 week program has 34 Units and 370 activities.",
      para2:
        " Program 2 covers Spelling, Phonics, Spelling Skills, Synonyms, Antonyms, Syllables, Prefixes, Suffixes, Homophones, Grammar, Punctuation,Dictionary Skills and more.",
    },
    {
      heading: "Program 5",
      subheading: "Print & Online",
      para1:
        " Suitable for average Grade/Year 4 students (about 9 years of age) to adults.The 35 week program has 34 Units and 370 activities.",
      para2:
        " Program 2 covers Spelling, Phonics, Spelling Skills, Synonyms, Antonyms, Syllables, Prefixes, Suffixes, Homophones, Grammar, Punctuation,Dictionary Skills and more.",
    },
  ];

  const CardComponent = ({ data }) => (
    <div className=" flex flex-col justify-center items-center border shadow-2xl  p-2 px-3 rounded-lg gap-y-3">
      <h1 className="font-bold">{data.heading}</h1>
      <h3>{data.subheading}</h3>
      <p className="my-3">{data.para1}</p>
      <p className="my-3">{data.para2}</p>
    </div>
  );
  return (
    <div className="space-y-7 py-5">
      <h1 className="text-2xl font-bold text-center">Content of the Program</h1>
      <p className="text-center">
        You can switch to a more suitable Program if you find you have enrolled
        at the wrong program.
      </p>
      <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {cardData.map((item) => (
          <CardComponent data={item} />
        ))}
      </div>
    </div>
  );
};

export default Section3;
