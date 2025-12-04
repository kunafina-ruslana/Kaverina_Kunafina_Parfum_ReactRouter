import Banner from "./components/Banner/Banner";
import SectionLogos from "./components/SectionLogos/SectionLogos";
import SectionProducts from "./components/SectionProducts/SectionProducts";
import SectionMarquee from "./components/SectionMarquee/SectionMarquee";
import SectionImageWithText from "./components/SectionImageWithText/SectionImageWithText";
import SectionAdvantages from "./components/SectionAdvantages/SectionAdvantages";
import SectionReviewsSlider from "./components/SectionReviewsSlider/SectionReviewsSlider";
import Footer from "../../components/Footer/Footer"

function HomePage() {

  return (
    <>
      <Banner/>
      <SectionLogos/>
      <SectionProducts/>
      <SectionImageWithText/>
      <SectionMarquee/>
      <SectionAdvantages/>
      <SectionReviewsSlider/>
      <Footer/>
    </>
  )
}

export default HomePage