import HomeBottomText from "../components/home/HomeBottomText"
import HomeHeroText from "../components/home/HomeHeroText"
import Video from "../components/home/Video"

const Home = () => {
  return (
    <>
    <div className="w-full h-screen fixed">
      <Video />
    </div >
    <div className="w-full h-screen relative flex flex-col justify-between">
      <HomeHeroText />
      <HomeBottomText />
    </div>
    </>
)}

export default Home