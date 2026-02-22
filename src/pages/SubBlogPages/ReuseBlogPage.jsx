import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Section from "../../components/SubBlog/CopyRight/Section";
import number1 from "../../assets/images/Program-info/1.png";
import number2 from "../../assets/images/Program-info/2.png";
import number3 from "../../assets/images/Program-info/3.png";
import number4 from "../../assets/images/BlogBanner2.png"

const p1 = () => {
  return (
    <div className="text-sm">
      Rules for Plurals <br /> <br />
      Singular means one. <br /> <br />
      Plural means more than one.  <br /> <br />
      1. Most nouns are made plural by adding s: <br /> <br />
       More than one boy  = boys <br /> <br />
      More than one girl = girls <br /> <br />
      More than one hat = hats <br /> <br /> 1.  If the word ends in x or s, sh
      or ch, we add es: <br /> <br />
       More than one box = boxes <br /> <br /> More than one bus = buses More
      than one bush = bushes <br /> <br /> More than one coach = coaches <br />{" "}
      <br /> Others: trenches, brushes, dresses, etc <br /> <br />  1. If a noun
      ending in y is preceded by a consonant, change the y to i and add es:
      e.g., sky- skies, story – stories, city – cities, family – families.{" "}
      <br /> <br />   1. For words ending in vowel + y add s: e.g., valley –
      valleys, key – keys, etc  <br /> <br /> Exceptions   <br /> <br /> 1. Some
      words change to make a plural: <br /> <br />  More than one mouse = mice{" "}
      <br /> <br /> More than one man = men <br /> <br /> More than one woman =
      women <br /> <br /> More than one child = children
      <br /> <br /> More than one tooth = teeth. <br /> <br />  1.Some nouns
      that end in f, ff or fe are made plural by changing the f to v and adding
      es: <br /> <br /> e.g., leaf – leaves, knife – knives, shelf – shelves,
      half – halves, life – lives.
      <br /> <br />   1. If a noun ending in o is preceded by a consonant, an es
      is often added: e.g., dingo – dingoes, cargoes, potatoes, tomatoes <br />{" "}
      <br /> 1.  Some nouns have the same form for singular and plural: e.g.,
      sheep, scissors, ice, offspring, gold,    
    </div>
  );
};

const p2 = () => {
  return (
    <div>
      Syllables are the parts of a word that are spoken as a single unit, which
      together make up a word. <br /> <br />
      A good understanding of syllables is an important skill that students can
      use to learn the spelling of long, complicated words. Breaking a word into
      syllables helps a student memorise the spelling of a word. <br /> <br />
      Don’t get hung up about exactly the exact placement of a syllable break.
      The number of syllables is more important than identifying the exact
      syllable breaks. Most dictionaries will show the syllables in the word.
      Different conventions are used. The Kitehawk Program follows the
      International Phonics notation. Here doubled consonants are not separated
      as they make only one sound in speech e’g’, ca/ttle. The Merriam Webster
      dictionary usually splits doubled consonants e.g., cat / tle. Either form
      of notation is suitable for breaking a word into syllables. <br /> <br />
      There are many techniques used to learn how to break syllables into words.
      Some teachers call syllables ‘jaw droppers’. If you cup your hand under
      your jaw, the jaw will drop each time a syllable is spoken. The jaw drops
      because there is a vowel sound in each syllable. When breaking words into
      syllables, the students can clap each of syllables as they say the word
      Another method is to sing the word, because when we sing a word we
      naturally break words into syllables. Syllables occur in all languages and
      can be taught in local languages. For example, the word ‘kangaroo’ from
      Western Desert Aboriginal language is ‘marlu’, which has two syllables ‘
      mar / lu ‘. <br /> <br />
      Rules for Syllables: <br /> <br />
      1. Every syllable has a vowel or vowel sound. <br /> <br />
      The y in funny makes the long /ee/ vowel sound. The y in sky makes the
      long /igh/ vowel sound. <br /> <br />
      Breaking a word into syllables is not an exact science. There can be more
      than one answer. (e.g, evolution: ev-ol-u’-shun, <br /> e-vo-lu’-shun).{" "}
      <br />
      The important point is the number of syllables is the same. <br />
      There are different ways of pronouncing words and writing syllables. All
      have merit and all are useful. <br />
      (e.g., billycan: bi / lly / can, bil / ly / can, bill / y / can) <br />
      Note each syllable has a vowel sound. Either way of breaking the word into
      syllables is OK for teaching purposes. I prefer the former example because
      it fits the next rule about breaking double consonants. <br /> <br />
      A general rule break syllables before or after doubled consonants (e.g.,
      ca / ttle, sci/ ssors, ye / llow, etc). <br /> <br />
      Compound words, prefixes and suffixes are usually separated as syllables
      (un / tie, care / ful, pass / word) <br />
      Some larger dictionaries break words into syllables. Some show the
      separation of syllables with dots (e.g., vo٠cab٠u٠lar٠y which has five
      syllables) others use a ‘swinging apostrophe’.. <br /> <br />
      A single consonant between two vowels goes with the second vowel if the
      first vowel is long. (e.g., o / val, i / de / a, ti / ger, to / tal, etc.)
      See Unit 3-13. <br /> <br />
      Words with two consonants between two vowels are divided into syllables
      between the consonants. See Unit 3-15. <br />
      Example: p e r٠ s o n c o m ٠ p a s s p r o b ٠ l e m <br />
      v c ٠ c v v c ٠ c v v c ٠ c v <br /> <br />
      Pronunciation <br /> <br />
      The stress mark shown in words in the dictionary should not be confused
      with syllables. The stress marks in a dictionary show where the emphasis
      is placed in a word. The main stress or accent is shown by a mark usually
      before the stressed vowel. <br />
      For example in the word vo ‘cab u lar y – the dictionary shows the stress
      in pronunciation is on “ ‘cab “ – in the second syllable.
    </div>
  );
};

const p3 = () => {
  return (
    <div>
      General Rules for Suffixes or Word Endings <br /> <br />A suffix is added
      to the end of a root, which is either a whole word or part of a word. The
      suffix changes its meaning and its part of speech. <br /> <br />
      Rules: The following rules are general and there are many exceptions to
      them. Some have been given but do not need to be taught in the lower
      levels. <br /> <br />
      Adding suffixes that start with a vowel (e.g., ed, ing, able, ous, er,){" "}
      <br /> <br />
      If there is a vowel and then a consonant at the end of a word, double the
      consonant. <br /> <br />
      win + ing = winning, hop + ing = hopping, hop + er = hopper, hop + ed =
      hopped, batted, shovelled, labelled, etc <br />
      Where words end in ‘y’, change the ‘y to ‘i’ and add the suffix.
      <br />
      happy + est = happiest, carry + ed = carried, sunny + er = sunnier, reply
      + ed = replied, lazy + est + laziest, etc <br /> <br />
      Exceptions: reply +ing = ing <br /> <br />
      When a word ends in a silent e, drop the e if the suffix begins with a
      vowel.
      <br />
      ride – riding; make – making, use – using, nerve – nervous, like + ed =
      liked, coming, etc <br />
      Adding suffixes that start with a consonant
      <br />
      Where a suffix starts with a consonant, just add it. <br />
      ness, less, ment, ful, ly, etc
      <br />
      <br />
      sad + ness = sadness sickness, sick + ness = sickness, goodness, etc{" "}
      <br />
      sleep + less = sleepless, helpless, etc
      <br />
      govern + ment = government, excite + ment = excitement, judgement, etc
      <br />
      sad + ly = sadly, wise + ly = wisely, etc.
      <br />
      <br />
      In most cases the silent ‘e’ is retained.
      <br />
      Exceptions: awful, argument, wisdom, wholly, happiness, bodily, etc.
      <br />
      <br />
      Where the suffix ‘full’ is added, just drop the final ‘l’.
      <br />
      help + full = helpful, hope + full = hopeful, harmful, playful, etc.
      <br />
    </div>
  );
};

const p4 = () => {
  return (
    <div className="gap-y-10">
      <h1 className="my-5 font-bold">How to find out more about Copyright</h1>{" "}
      <br />
      <p>
        <span className="font-bold">
          Reproduction and Communication for Educational Purposes <br />
        </span>
        The Australian Copyright Act 1968 allows a maximum of one chapter or 10%
        of the pages of a workbook, whichever is greater, to be reproduced and
        or communicated by any educational institution for its educational
        purposes, provided that the educational institution has given a
        remuneration notice to the Copyright Agency Limited under the Act.
        <br /> <br />
        For further Information contact: <br />
        Copyright Agency Limited
        <br />
        Level 15, 233
        <br />
        Castlereagh Street
        <br />
        Sydney NSW 2000 Australia
        <br />
        Toll free within Australia 1800 066 844
        <br />
        <span className="font-bold">Tel: </span> 02 9394 7600
        <br />
        <span className="font-bold">Fax:</span> 02 9394 7601
        <br />
        <span className="font-bold">Or email: </span>info@copyright.com.au{" "}
        <br />
        <br />
        Licence enquiries to licence@copyright.com.au
        <br />
        <span className="font-bold">Website : </span>http://copyright.com.au
      </p>
    </div>
  );
};

const AboutContent = [
  {
    id: 1,
    heading: "Plurals of Nouns ",
    subheading: "By Mark | How to ",
    backgroundimage: number1,
    child: p1,
  },
  {
    id: 2,
    heading: "Syllables",
    subheading: "By Mark | How to ",
    backgroundimage: number2,
    child: p2,
  },
  {
    id: 3,
    heading: "Suffixes",
    subheading: "By Mark | How to ",
    backgroundimage: number3,
    child: p3,
  },
  {
    id: 4,
    heading: "Copyright Information",
    subheading: "By Mark | How to ",
    backgroundimage: number4,
    child: p4,
  },
];

const CopyrightPage = () => {
  const { pageIndexing } = useParams();
  const [data, setdata] = useState({});

  console.log(pageIndexing);

  const collectingData = () => {
    if (!pageIndexing) {
      return;
    }

    const obj = AboutContent.filter((item) => item.id === Number(pageIndexing));
    return setdata(obj[0]);
  };
  useEffect(() => {
    if (pageIndexing) {
      collectingData();
    }
  }, [pageIndexing]);

  return <>{data.id ? <Section data={data} /> : " "}</>;
};

export default CopyrightPage;
