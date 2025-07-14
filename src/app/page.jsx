import HeaderNavbar from "../components/HeaderNavbar";
import ImageBanner from "../components/ImageBanner";
import UnderBanner from "../components/UnderBanner";
import CampsSection from "../components/CampsSection";
import HolidayProgramSection from "../components/HolidayProgramSection";
import CoursesSection from "../components/CoursesSection";
import TeachingTeamsSection from "../components/TeachingTeamsSection";
import TeachingMethodsSection from "../components/TeachingMethodsSection";
import BlogSection from "../components/BlogSection";
import GallerySection from "../components/GallerySection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeaderNavbar />
      <ImageBanner />
      <UnderBanner />
      <CoursesSection />
      <HolidayProgramSection />
      <CampsSection />
      {/* <TeachingTeamsSection /> */}
      {/* <TeachingMethodsSection /> */}
      {/* <BlogSection /> */}
      <GallerySection />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default Home;
