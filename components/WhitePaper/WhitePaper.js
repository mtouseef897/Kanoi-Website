import Header from "../Header/Header";
import ContentOverview from "./ContentOverview";
import HeroSection from "./HeroSection";
import IndexSidebar from "./IndexSidebar";
import MainPage from "./MainPage";


const WhitePaper=()=> {

  return (
    < >
      <Header/>
      <HeroSection />
      <div className="flex w-[96%] mx-auto mt-[40px] gap-[48px]">
        <ContentOverview/>
        <MainPage />
        <IndexSidebar />
      </div>
    </>
  );
}

export default WhitePaper;
