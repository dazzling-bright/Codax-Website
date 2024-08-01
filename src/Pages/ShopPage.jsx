import Hero from "../components/hero/Hero";
import ShopHeroImage from "../components/Shop/images/shopHeroImage.png"
import TopCategory from "../components/Shop/TopCategory";
import WhatWeOffer from "../components/Shop/Offer";
import PopularCourses from "../components/Shop/PopularCourses";
import FreeCourses from "../components/Shop/FreeCourses";
import TechJourney from "../components/Shop/TechJourney";

const ShopPage = () => (
  <>
    <Hero HeroImage={ShopHeroImage} plainHeadingText="Learn Software Development and Be" coloredHeadingText="Sought After"/>
    <TopCategory />
    <WhatWeOffer />
    <PopularCourses />
    <FreeCourses />
    <TechJourney />
  </>
);

export default ShopPage;
