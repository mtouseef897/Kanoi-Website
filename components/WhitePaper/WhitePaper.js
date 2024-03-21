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
     
      <div className="relative flex w-[97%] mx-auto mt-[40px] item-center justify-center xl:justify-between lg:gap-4">
        <ContentOverview/>
        <MainPage />
        <IndexSidebar />
     
      </div>
      </WhitePaperIndexContextProvider>
    </>
  );
}

export default WhitePaper;
