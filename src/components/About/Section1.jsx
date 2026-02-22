const Section = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8">
      {/* <h1 className="text-2xl font-bold ">About Kitehawk Learning</h1> */}
      <p className="text-left">
        The Kitehawk Program provides students with:
        <ul className="list-disc list-inside">
          <li>
            The skills required to learn independently, including spelling
            skills and dictionary skills;
          </li>
          <li>
            An understanding of the basic structure of the English language.
          </li>
          <li>
            The program assumes students know the alphabet but have a limited
            knowledge of phonics.
          </li>
          <li>
            The program begins with small, important words; (e.g., are, you,
            and, was, etc) often missed in other programs.
          </li>
          <li>
            It is written in plain English and covers basic grammar and
            punctuation.
          </li>
          <li>
            The free website is available as a resource for the teachers and
            parents of students who use the workbooks or work online.
          </li>
        </ul>
      </p>

      <p className="text-center  font-bold">
        The Kitehawk Learning Spelling & Literacy Program now includes Online
        Programs 1 to 4.<br/> A new Third Edition of the Kitehawk workbooks Program 1
        to Program 5 are now available together with the free website.<br/> The five
        programs are suitable for average 7 to 12 year old students, and adult
        literacy programs.
      </p>
    </div>
  );
};

export default Section;
