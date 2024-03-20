import { useContext } from "react";
import Header from "./Header/Header";
import NextButton from "./NextButton";
import { StoryPageContext } from "@/context/StoryPageContext";
import TextStoryCard from "./StoryCard/TextStoryCard";
import Stories from "@/data/Stories";
import CharacterstoryCard from "./StoryCard/CharacterStoryCard";
import HotSpot from "./HotSpot";

const StoryPage = () => {
  const { storyPageCount } = useContext(StoryPageContext);
  const Story = Stories[storyPageCount];
  const classNamesArray = [
    "img-hover-zoom--sp2",
    "img-hover-zoom--sp3",
    "img-hover-zoom--sp4",
    "img-hover-zoom--sp5",
    "img-hover-zoom--sp6",
    "img-hover-zoom--sp7",
    "img-hover-zoom--sp8",
  ];
  // if(Story.type==='text'){
  //   console.log(Story.text)
  // }
  // if(Story.type==='card'){
  //   console.log(Story.character.name)
  // }
  console.log("storyPages Number: ",storyPageCount);
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-full w-full img-hover-zoom ${
          storyPageCount > 0 && classNamesArray[storyPageCount - 1]
        } overflow-hidden`}
      >
        { storyPageCount!==13&&<video
          src={`${
            storyPageCount === 0 ? "/storypage/bgstorypage1.mp4":
             storyPageCount < 13 ? "/storypage/Miyako Night.mp4": "/storypage/Miyako Fire.mp4"
          }`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover -z-10 "
        ></video>}
        {storyPageCount===13 && <img className="w-full h-full object-cover -z-10" src="/illustrations/sp14.gif" />}
      </div>

      <div className="overlay"></div>
      {
        storyPageCount === 14 && <>
        {/* <img className="w-full h-full object-cover" src="/illustrations/transition.gif" /> */}
        {/* <video
          src={`/illustrations/smoke.webm`}
          autoPlay
          loop={false}
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover z-10 "
        ></video> */}
          <HotSpot tooltip={'A MASSIVE BARRIER'} xoffset={43} yoffset={20}/>
          <HotSpot tooltip={'A VILLAGE ON FIRE'} xoffset={60} yoffset={33}/>
        </>
      }
      {storyPageCount === 15 && (
        <div className="overlay-last-page flex items-center justify-center absolute left-0 top-0 w-full h-full bg-black/[0.7] backdrop-filter backdrop-blur-sm">
          <div className="w-[780px] h-[246px]">
            <img
              className="h-full w-full object-cover"
              src="/illustrations/logolastpage.png"
            />
          </div>
        </div>
      )}
      {storyPageCount === 12 && (
        <>
        {/* <img className="w-full h-full object-cover" src="/illustrations/transition.gif" /> */}
        {/* <video
          src={`/illustrations/smoke.webm`}
          autoPlay
          loop={false}
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover z-10 "
        ></video> */}
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/[0.7] backdrop-blur-sm flex items-center justify-center">
        <div className="max-w-[85%] lg:max-w-[50%] max-h-[60%] w-full h-full flex items-center justify-center relative">
          <img className="w-full h-full" src="/illustrations/old_paper.png" />
          <div className="w-full absolute z-[1] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[24px] lg:text-[1.75rem] 2xl:text-[2.5rem] text-center free-hand max-w-[80%] lg:max-w-[58%]">
                     "For the sake of peace, under the Emperor's name, we invoke the
                  'Night Law' tonight. Curse Masters hiding among us, use your
                  forbidden arts to command Yōkai as your pawns and fight against
                   other Curse Masters. After your battles, we will grant the wish of
                   the one who achieves the most."
          </div>
        </div>
      </div>
      </>
      )}
      <Header />
      <NextButton />
      {Story.type === "text" && <TextStoryCard storyText={Story.text} />}
      {Story.type === "popup" && <TextStoryCard />}
      {Story.type === "card" && (<CharacterstoryCard storyCharacter={Story.character} /> )}
    </>
  );
};

export default StoryPage;
