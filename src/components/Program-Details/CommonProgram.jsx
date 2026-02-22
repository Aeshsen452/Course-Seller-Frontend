import { ProgramOne, ProgramTwo } from "./ProgramsTable";
import ProgramBannerImage from "../../assets/images/ResourcesBannerImages.jpg";
import { useParams } from "react-router-dom";

const programonedata = [
  {
    Dictation: {
      dicName: "Unit 1-01 – Unit 1-06",
      dicLink: "#",
    },
    Answersheet: [
      {
        tdname: "Unit 1-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-04",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-06",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 1-07- Unit 1-12", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 1-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-04",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-06",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 1-13 – Unit 1-18", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 1-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-04",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-06",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 1-19 – Unit 1-24", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 1-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-04",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-06",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 1-25 –  Unit 1-30", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 1-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 1-04",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 1-06",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
  },
];

const programtwodata = [
  {
    Dictation: { dicName: "Unit 2-02- Unit 2-05", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 2-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-04",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 2-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 2-06 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 2-07- Unit 2-11", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 2-07",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-08",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-09",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-10",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 2-11",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 2-12 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 2-13- Unit 2-17", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 2-13",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-14",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-15",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-16",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 2-17",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 2-18 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 2-19- Unit 2-23", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 2-019",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-20",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-21",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-22",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 2-23",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 2-24 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 2-25- Unit 2-29", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 2-25",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-26",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-27",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-28",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 2-29",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "	Unit 2-30 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 2-31- Unit 2-34", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 2-31",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-32",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-33",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 2-34",
        tdlink: "abc.com",
        tdgameslink: "games.com",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 2-35 Spelling Review	",
        link: "#",
        Games: {
          linkname: "Answers KT Review Unit 2-35A",
          link: "abc.com",
        },
      },
    ],
  },
];

const programthreedata = [
  {
    Dictation: { dicName: "Unit 3-01 – Unit 3-05", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 3-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 3-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 3-06 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 3-07- Unit 3-11", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 3-07",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-08",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-09",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-10",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 3-11",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 3-12 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 3-13 – Unit 3-16", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 3-13",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-14",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-15",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-16",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "SEMESTER REVIEW",
      },
      {
        linkname: "Unit 3-18 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 3-19- Unit 3-23", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 3-19",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-20",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-21",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-22",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-23",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 3-24 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 3-25 – Unit 3-29", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 3-25",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-26",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-27",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-28",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-29",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 3-30 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 3-31- Unit 3-35", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 3-31",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-32",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-33",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-34",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 3-35",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 3-36 Spelling Review",
        link: "#",
      },
    ],
  },
];

const programfourdata = [
  {
    Dictation: { dicName: "Unit 4-01 – Unit 4-05", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 4-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 4-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 4-06 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 4-07- Unit 4-11", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 4-07",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-08",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-09",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-10",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 4-11",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 4-12 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 4-13 – Unit 4-17", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 4-13",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-14",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-15",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-16",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-17",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 4-18 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 4-19- Unit 4-23", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 4-19",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-20",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-21",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-22",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-23",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 4-24 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 4-25 – Unit 4-29", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 4-25",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-26",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-27",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-28",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-29",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 4-30 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 4-31- Unit 4-34", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 4-31",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-32",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-33",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 4-34",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 4-35 Spelling Review",
        link: "#",
      },
    ],
  },
];

const programfivedata = [
  {
    Dictation: { dicName: "Unit 5-01 – Unit 5-05", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 5-01",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-03",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-02",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 5-05",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 5-06 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 5-07- Unit 5-11", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 5-07",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-08",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-09",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-10",
        tdlink: "abc.com",
        tdgameslink: "#",
      },

      {
        tdname: "Unit 5-11",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 5-12 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 5-13 – Unit 5-17", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 5-13",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-14",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-15",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-16",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-17",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 5-18 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 5-19- Unit 5-23", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 5-19",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-20",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-21",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-22",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-23",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 5-24 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 5-25 – Unit 5-29", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 5-25",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-26",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-27",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-28",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-29",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 5-30 Spelling Review",
        link: "#",
      },
    ],
  },
  {
    Dictation: { dicName: "Unit 5-31- Unit 5-33", dicLink: "#" },
    Answersheet: [
      {
        tdname: "Unit 5-31",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-32",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
      {
        tdname: "Unit 5-33",
        tdlink: "abc.com",
        tdgameslink: "#",
      },
    ],
    SpellingReviews: [
      {
        linkname: "Unit 5-34 Spelling Review",
        link: "#",
      },
    ],
  },
];

const CommonProgram = () => {
  const { indexing } = useParams();
  const Componentmount = () => {
    const components = {
      1: <ProgramOne programdata={programonedata} />,
      2: <ProgramTwo programdata={programtwodata} />,
      3: <ProgramTwo programdata={programthreedata} />,
      4: <ProgramTwo programdata={programfourdata} />,
      5: <ProgramTwo programdata={programfivedata} />,
    };

    return components[indexing] || null;
  };
  return (
    <div>
      <div
        className="w-full h-96  bg-cover bg-center relative flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url(${ProgramBannerImage})`,
          backgroundSize: "cover",
        }}
      >
        <h3 className="text-xl text-white">THE KITEHAWK PROGRAM</h3>
        <h1 className="text-[60px] text-white font-bold">Resources</h1>
      </div>
      <h1 className="p-7 text-center text-xl text-blue-900 font-semibold">
        Program {indexing} Resources
      </h1>
      <Componentmount />
    </div>
  );
};

export default CommonProgram;
