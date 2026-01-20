import {Link} from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] text-[#fff] flex justify-center items-center gap-4 mb-2">
    <Link to="/projects" className="text-[5vw] px-8 pt-2 uppercase border-3 border-[#fff] rounded-full leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">Projects</Link>
    <Link to="/agence" className="text-[5vw] px-8 pt-2 uppercase border-3 border-[#fff] rounded-full leading-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">Agence</Link>
    </div>
  )
}

export default HomeBottomText