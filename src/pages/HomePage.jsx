import { ChooseBooks } from "../components/Books/ChooseBooks";
import CraftedPremiumGrade from "../components/Home/CraftedPremiumGrade";
import HomeBanner from "../components/Home/HomeBanner";
import HowItWorks from "../components/Home/HowItWorks";
import MostPopularCourse from "../components/Home/MostPopularCourse";
import PricingOption from "../components/Home/PricingOption";

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      
      <MostPopularCourse />
      <ChooseBooks/>
      <CraftedPremiumGrade />
      <HowItWorks />
      <PricingOption />
    </>
  );
}
