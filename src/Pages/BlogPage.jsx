import Hero from "../components/hero/Hero";
import LatestStories from "../components/Blog/LatestStories";
import BlogHeroImage from "../components/Blog/images/BlogHeroImage.png"

const BlogPage = () => (
  <>
    <Hero
      HeroImage={BlogHeroImage}
      plainHeadingText=""
      coloredHeadingText="What’s New "
      dynamicHeadingText="on Our Blog"
    />
    <LatestStories />
  </>
);

export default BlogPage;
