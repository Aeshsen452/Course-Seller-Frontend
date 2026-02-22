import AboutBanner from "../components/About/Banner";
import Section from "../components/About/Section1";
import TableRecord from "../components/About/Table";
import Section2 from "../components/About/Section2";
import Section3 from "../components/About/Section3";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <Section/>
      <TableRecord/>
      <Section2/>
      <Section3/>
    </>
  );
};

export default AboutPage;
