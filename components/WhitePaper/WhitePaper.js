import { WhitePaperIndexContextProvider } from "@/context/WhitePaperIndexContext";
import Header from "../Header/Header";
import ContentOverview from "./ContentOverview";
import HeroSection from "./HeroSection";
import IndexSidebar from "./IndexSidebar";
import MainPage from "./MainPage";
import MobileContentOverview from "./MobileContentOverview";


const WhitePaper=()=> {

  return (
    < >
     <WhitePaperIndexContextProvider>
      <Header/>
      <MobileContentOverview/>
      <HeroSection />
      <div className="relative flex w-[91.4%] md:w-[95.8%] mx-auto mt-[24px] md:mt-[40px]  md:gap-[48px] justify-center">
        <ContentOverview/>
        <MainPage />
        <IndexSidebar />

      </div>
      </WhitePaperIndexContextProvider>
    </>
  );
}

export default WhitePaper;
