import logo from "../assets/logo.svg"
import { FaLinkedin, FaGithub, FaInstagram, } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="" className="mx-2 w-10" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://www.linkedin.com/in/premraj-singh-944791285/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/prems51" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/yrr_premmm/" target="_blank"><FaInstagram /></a>
        <a href="https://x.com/Prem_Ji67" target="_blank"><FaSquareXTwitter /></a>
      </div>
    </nav>
  )
}

export default Navbar
