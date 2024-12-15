import React from "react"
import { Logo } from "../assets"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="w-full h-[320px] border-t border-t-black bg-white mt-28 flex items-center">
        <div className="w-[30%] h-full flex border-r border-r-black items-center justify-center">
          <img src={Logo} alt="logo-luvlywed" />
        </div>
        <div className="w-[70%] h-full flex items-center justify-end pr-16">
          <div className="w-1/3 h-full flex flex-col justify-center items-end text-left">
            <p className="font-semibold mb-4">Menu pertama</p>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
          <div className="w-1/3 h-full flex flex-col justify-center items-end text-left">
            <p className="font-semibold mb-4">Menu pertama</p>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
          <div className="w-1/3 h-full flex flex-col justify-center items-end text-left">
            <p className="font-semibold mb-4">Menu pertama</p>
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="w-full overflow-x-hidden h-max py-8 border-t border-t-black text-black lg:text-[15px] text-[16px] flex items-center px-5 lg:justify-center">
        <small>#Framework css from Indonesia 2024</small>
      </div>
    </React.Fragment>
  )
}

export default Footer