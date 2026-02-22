import TopComponent from "./Referpage.jsx/TopComponent";
import Learning from "../../assets/images/LearningTips.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Number1 from "../../assets/images/Teaching/1.jpg";
import Number2 from "../../assets/images/Teaching/2.png";
import Number3 from "../../assets/images/Teaching/3.png";
import Number4 from "../../assets/images/Teaching/4.png";
import Number5 from "../../assets/images/Teaching/5.png";

const paragraph2 = () => {
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

const p1 = () => {
  return (
    <div>
      Repetition is practising a task many times, whether it be learning to
      spell words, playing a musical instrument or improving your sporting
      prowess. <br /> <br />
      You cannot learn to play a sport or musical instrument by just reading a
      manuals on technique. Hundreds of hours of practice are still needed to
      develop your muscle memory. <br /> <br />
      Champion tennis players and golfers hit hundreds of balls each day. They
      practise, practise, practise! Practice is essential for brain development
      and memory. The practise develops the pathways and linkages in the brain –
      that is developing the brain. The repetition helps to transfers the new
      knowledge into the long-term memory. Writing, typing, saying and hearing
      all help to place the knowledge in the long-term memory. This is a slower
      process than with a computer where you type in the answer and then simply,
      ‘save’ it. <br /> <br />
      Repetition of bad habits also ingrains that behaviour as it too, becomes
      dictated to us by our brain. <br /> <br />
      Rote learning is often used in a pejorative sense – mindless repetition.
      Rote learning is important in non-logical tasks such as learning the
      alphabet, and counting to ten. <br /> <br />
      Repetition is important in learning sounds and rules in literacy, when
      there are processes and facts that assist the learning and understanding
      concepts. (e.g., learning jingles, etc.) <br /> <br />
      The Kitehawk Spelling and Literacy Program relies heavily on repetition or
      practise. Every Unit involves the repeated writing of the List Words. Most
      of the activities ask students to type or identify list words – the aim is
      to learn the concepts, the spelling and the meaning – permanently. <br />{" "}
      <br />
    </div>
  );
};

const p2 = () => {
  return (
    <div>
      The following suggestions may help get better teaching and learning
      results with Aboriginal students, particularly those in more remote areas.
      <br /> <br />
      1. Avoid Working with the Individual in a Group Situation
      <br />
      Many Aboriginal students do not like to be singled out in a classroom or
      group situation. It is sometimes better to get students to answer
      questions collectively than causing embarrassment to one student by
      focussing on them in front of other students. Try for collective responses
      and deal with individuals in private by themselves. <br />
      <br />
      Aboriginal society does not single people out in a group situation.
      Students may recoil at any attempt to get them to give an answer, to
      praise or reprimand them too publicly, or to stand in front of their
      peers. In other words, many tend to recoil if made to feel conspicuous in
      any way.
      <br />
      <br />
      Where there are large numbers of Aboriginal students in a class they tend
      to call out answers together and chatter about them. They do not regard
      individuality as highly as they do the interests of the group and tend to
      participate together.
      <br />
      <br />
      2. Asking Questions
      <br />
      The question and answer format of English is not common in Aboriginal
      society.
      <br />
      Try not to ask a question in a challenging way – especially one that
      requires an answer ‘no’. Many Aboriginal people do not like to <br />
      say ‘no’ as they feel they are letting you down. Often it is better to ask
      a question or give an instruction obliquely.
      <br />
      <br />
      Examples: What would you like to eat for lunch? <br />
      Alternative: There’s bread, cold meat and tomato for lunch; if you’re
      hungry.
      <br />
      <br />
      Will you help clean the bus?
      <br />
      Alternative: Perhaps you may like to help clean the bus.
      <br />
      <br />
      3. Eye Contact
      <br />
      Some Aboriginal students feel uncomfortable with direct eye contact with
      the person to whom they are speaking. This can be avoided by focussing on
      the problem or the issue instead of the person (and their face/eyes). Try
      to walk with a student when talking to them, or sit next to them and look
      ahead. That way you are not looking at them. There is more chance of
      getting young children to talk in this situation, especially if you want
      them to tell you what they know.
      <br />
      <br />
      Some Aboriginal people still consider it disrespectful to maintain eye
      contact with the person with whom you are speaking.
      <br />
      <br />
      I found it easier to get Aboriginal children talking when we went for our
      afternoon walk in the bush. They were comfortable in the bush situation.
      They would tell me about what you can or can’t eat, which animal tracks
      they saw. When they weren’t being directly challenged with eye to eye
      questions, they were generally relaxed. On those walks they taught me
      their language (and laughed at my pronunciation) and they learned more
      English.
      <br />
      <br />
      4. Silence
      <br />
      Many Aboriginal people do not reply instantly when asked a question. It is
      not unusual for long periods of silence before a response is given.
      Aboriginal people often think about the question before answering. <br />
      <br />
      Silence does not always mean someone is shy or does not know the answer.
      Try not to interrupt and thus give students time to think and then answer.{" "}
      <br />
      <br />
      5. Speech Language
      <br />
      Aboriginal students have an immense ability to learn different languages.
      Around Broome in Western Australia, from the early 1900’s to the 1960’s
      and 1970’s, many Aboriginal people spoke fluent English, Japanese, Malay,
      Tagalog, Chinese, together with up to 6 or 7 indigenous languages.
      <br />
      <br />
      Good clear pronunciation is important for all students. Often our ability
      to spell words correctly depends on our pronunciation of the words.
      <br />
      <br />
      Speech Differences
      <br />
      Many English sounds are not in Indigenous languages. Sounds which may be
      new to them include: ‘h, s, th, f, ph, x, sk and sh’. (e.g., the ‘sk’ in
      ‘asked’ is often pronounced ‘axed’, the ‘th’ in ‘that’ is pronounced
      ‘dat’, etc )<br />
      <br />
      Some sounds are interchangeable such as: ‘g = k, p = b, t = d ‘. (e.g.,
      Pintubi = Bintubi, Kukadja = Googadja)
      <br />
      <br />
      The ‘h’ before a vowel at the beginning of a word is often not pronounced
      by Aboriginal students when speaking. The same occurs in the French
      language where the ‘h’ is not pronounced. The French often do not stress
      the ‘h’ in English words such as ‘hotel’, ‘horse’ or ‘hot’.
      <br />
      <br />
      Teaching students how to pronounce some difficult sounds.
      <br />
      The sound ‘th’ is not in any Aboriginal languages to my knowledge.
      <br />
      That explains why the sound ‘th’ is difficult to pronounce for many
      Aboriginal students.
      <br />
      <br />
      This can be easily taught by asking the child to put their tongue between
      their teeth – like a lizard. At first when they try to say the sound, they
      often remove the tongue from its position between the teeth – but after a
      few goes, and being asked not to pull the tongue back, they can have
      perfect pronunciation. Remember there are two way of pronouncing ‘th’:
      soft sound ‘th’ as in ‘thick’ and the hard sound ‘th’ as in ‘that’. This
      method is an easy way to teach the sound – and applies to both variations
      of the sound. I have never found any child embarrassed when I have taught
      this sound. They usually have a big smile when they realise they can
      correctly say the sound ‘th’.
      <br />
      <br />
      The sound ‘wh’ can also cause problems with some students. An exercise
      that can help correct pronunciation is to say the words ‘when’ and ‘went’.
      ‘Went’ is straight forward, but ‘when’ is a plosive sound like ‘t’, ‘p’
      and ‘f’. If the student holds their hand open in front of the mouth, they
      can feel the explosive puff of air onto the hand. With the pronunciation
      of ‘went’, there is no sensation of air hitting the open palm of the hand.
      <br />
      <br />
      Syllables
      <br />
      When teaching syllables in spelling, the same syllable rules apply to
      Aboriginal languages. In the Martu language spoken in the western desert
      (e.g., Jigalong), echidna is called ‘mingwa’ ming / wa – both syllables
      have a vowel sound.
      <br />
      The kangaroo is called ‘marlu’ = mar / lu – both syllables have a vowel
      sound. When teaching syllables use local Aboriginal words to demonstrate
      that syllable rules apply to all languages. Most importantly encourage
      correct pronunciation as correct pronunciation often assists correct
      spelling and understanding. (See Print Program 5 Unit 09 Ex 5)
      <br />
      <br />
      If you have any tips to add, please contact Mark Nevill
    </div>
  );
};

const p3 = () => {
  return (
    <div>
      At Teachers College in the 1960’s, our Speech and Drama Lecturer
      emphasized the need to teach students listening skills. This skill was
      routinely taught to students through dictation and other listening
      activities. When I returned to education as a relief teacher in remote
      areas after an absence of 30 years, I observed attention spans had shrunk
      and were almost non-existent in some students, That should not have been
      surprising when you see television where hundreds of images flash by in
      video clips and adverts. The imperative to teach listening skills is now
      even greater.
      <br />
      To develop and improve listening and speaking skills, get students to
      undertake, and also read dictation exercises, in some of the activities
      below.
      <br />
      <br />
      Dictation and Listening Activities
      <br />
      <h3 className="font-bold">General dictation </h3>
      <br />
      Try dictating passages from interesting novels, biographies and science
      articles, etc. Magazines and newspapers can also be a source of topical
      articles for use in dictation. Students can mark their own work or their
      neighbour’s work. As well as improving the listening skills, this style of
      exercise can help flush out ‘core’ or ‘Must Know’ words, and other words
      that students have not mastered.
      <br />
      <br />
      <h3 className="font-bold"> Text reconstruction </h3>
      <br />
      In this activity, students are paired. One student is required to listen
      and the other is required to write. The students are read a passage from a
      suitable interesting text selected by the teacher (or a student). The
      passage is read at normal speed. One student writes notes, rather than a
      verbatim record, the other must listen carefully. After the dictated
      passage is read the two students are required to reconstruct the passage.
      The passage may be read again by the teacher if required. For variation,
      or for difficult passages, students can later group themselves into four
      to further work on reconstructing the passage.
      <br />
      <br />
      <h3 className="font-bold"> Filling the gap </h3>
      <br />
      The teacher can dictate a story leaving out the verbs or adjectives. The
      teacher can ‘cough’ or say ‘mmmm’ where the word is missing. Then pause to
      give students the time to fill the gaps with their own words. The whole
      class can discuss the results.
      <br />
      <br />
      <h3 className="font-bold"> Dictation with humorous results </h3>
      <br />
      The teacher can dictate to the students a list of descriptions of numbered
      words. The student then writes the chosen answers. For example: an
      adjective that describes a person
      <br />
      the name of their favourite sportsperson, entertainer or movie star.
      <br />
      a type of animal
      <br />
      a verb of movement (not ending with ‘ing’).
      <br />
      <br />
      i.e., 1. lazy 2. Roger Federer 3. kangaroo 4. fly
      <br />
      <br />
      The teacher then dictates a short passage with the appropriate gaps. For
      example:
      <br />
      ‘I could see a No 1 (lazy) rider coming along the track through the bush
      near the beach. As the person got closer I realised it was No 2 (Roger
      Federer). He was riding a No 3 (kangaroo). He looked awkward and then,
      suddenly fell off. He got up off the ground and started to No 4 (fly).
      towards the beach.’
      <br />
      <br />
      This exercise will get plenty of laughs!
      <br />
      <br />
      <h3 className="font-bold"> Passing the buck </h3>
      <br />
      Use a separate sheet of paper.
      <br />
      The teacher dictates a sentence.
      <br />
      The first student writes the dictated sentence.
      <br />
      The sheet is passed to the student on their right.
      <br />
      The student underlines any mistakes on the paper they receive.
      <br />
      The teacher dictates a second sentence.
      <br />
      The student writes the second sentence.
      <br />
      That sheet is again passed to the student on their right.
      <br />
      The student underlines any mistakes they find in the second sentence and
      corrects any errors in the first sentence.
      <br />
      Follow with sentences three and four etc.
      <br />
      In the final sentence the student underlines and corrects the errors.
      <br />
      This is followed by a review of the dictation by the whole class.
      <br />
      <br />
      <h3 className="font-bold"> Note Taking</h3>
      <br />
      <br />
      Students are required to listen to a longer dictated article and take
      notes to summarise the main points. Science articles, newspaper and
      magazine articles lend themselves to these activities.
    </div>
  );
};

const p4 = () => {
  return (
    <div>
      Some students will engage better with the Online Program than with the
      hard copy workbooks of the print version. <br /> <br />
      The Online Program is self-paced – students work at their own pace. <br />
      <br />
      There is immediate feedback to the student. There is no need to look-up
      answers, because when you submit an answer it is either correct or
      incorrect. The answer is invariably a list word or can be found with the
      help of a dictionary. There are no exams except for spelling reviews which
      are tests of previous list words. Every sixth Unit in Programs 2 to
      Program 4 is a Spelling Review. A pass is considered to be 80% or more
      correct. The Review can be repeated immediately if a score below 80% is
      achieved.
      <br />
      <br />
      Students can experiment with answers until they get it correct.
      <br />
      <br />
      Repetition or practise is important in learning. Most of the answers to
      the Activities in each Unit, are the List Words, which students are
      required to type repeatedly.
      <br />
      <br />
      The Online version does not allow doodling or colouring – distractions
      which are possible with workbooks.
      <br />
      <br />
      The Kitehawk Program is inexpensive when compared to corporate literacy
      programs.
      <br />
      <br />
      The Program can be accessed at home or school on a desktop, laptop or
      tablet.
      <br />
      <br />
      There are a variety of interactive activities, such as ‘Drag and Drop’.
      <br />
      <br />
      Online Units are not constrained by page size and availability. Often
      useful Activities are cut short in the print version to fit the available
      space. These Activities can be fleshed-out online.
      <br />
      <br />
      The program can now be adapted quite easily and quickly, to specific needs
      e.g., cultural, national, regional, institutional, etc.
    </div>
  );
};

const p5 = () => {
  return (
    <div>
      <h1 className="font-bold"> Attaining Functional Literacy </h1> <br /> <br />
      Students who complete Programs 1 and 2, should be functionally literate.{" "}
      <br />
      <br />
      They will have learned the skills to independently study and complete
      Programs 3, 4 and 5 with minimum assistance.
      <br />
      <br />
      To work independently the skills learned are:
      <br />
      <br />
      <ul className="list-disc">
        <li>
          Reading questions and instructions carefully to underline what is
          being asked.
          <br />
        </li>
        <li>
          How to use dictionaries to study new words, clarify the spelling and
          meaning of old words, and how to build their vocabulary
          <br />
        </li>
        <li>
          Know basic skills – phonemes (sounds), spelling skills, basic grammar.
          <br />
        </li>
        <li>
          How to breakdown long words into syllables and sounds.
          <br />
        </li>
        <li>
          Know the 50 most frequently used words in writing, as well as about
          700 other basic words studied in Program 1 and 2.
          <br />
        </li>
      </ul>
    </div>
  );
};

const LinkingPage2 = () => {
  const TeachingTips = [
    {
      id: 1,
      heading: "Plurals of Nouns",
      subheading: "By Mark | Learning ",
      backgroundimage: Number1,
      child: p1,
    },
    {
      id: 2,
      heading: "Plurals of Nouns",
      subheading: "By Mark | Learning ",
      backgroundimage: Number2,
      child: p2,
    },
    {
      id: 3,
      heading: "Plurals of Nouns",
      subheading: "By Mark | Learning ",
      backgroundimage: Number3,
      child: p3,
    },
    {
      id: 4,
      heading: "Plurals of Nouns",
      subheading: "By Mark | Learning ",
      backgroundimage: Number4,
      child: p4,
    },
    {
      id: 5,
      heading: "Plurals of Nouns",
      subheading: "By Mark | Learning ",
      backgroundimage: Number5,
      child: p5,
    },
  ];

  const { indexing } = useParams();
  const [data, setdata] = useState({});

  const collectingData = () => {
    if (!indexing) {
      return;
    }
    const obj = TeachingTips.filter((item) => item.id === Number(indexing));
    return setdata(obj[0]);
  };
  useEffect(() => {
    if (indexing) {
      collectingData();
    }
  }, [indexing]);

  return <>{data.id ? <TopComponent data={data} /> : " "}</>;
};

export default LinkingPage2;
