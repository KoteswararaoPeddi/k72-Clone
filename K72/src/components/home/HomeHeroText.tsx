import Video from "./Video"

const HomeHeroText = () => {
  return (
    <div className="font-[font2] uppercase pt-5 text-center text-[#fff]">
      <div className="text-[9vw] leading-[9vw] flex items-center justify-center">The spark for</div>
      <div className="text-[9vw] leading-[9vw] flex items-center justify-center">all
        <div className="w-[9vw] rounded-full overflow-hidden">
          <Video />
        </div>
        things</div>
      <div className="text-[9vw] leading-[9vw] flex items-center justify-center">creative</div>
    </div>
  )
}

export default HomeHeroText