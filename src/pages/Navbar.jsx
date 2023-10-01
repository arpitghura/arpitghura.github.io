import React, { useEffect, useState } from 'react'

const Navbar = () => {

  let listener = null
  const [scrollState, setScrollState] = useState(true)

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        if (scrollState !== false) setScrollState(false)
      } else {
        if (scrollState !== true) setScrollState(true)
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <header className={`flex flex-row sm:gap-5 items-center justify-between py-3 pl-10 pr-3 sm:top-auto top-0 sticky z-50 ${scrollState ? "bg-gray_900" : "bg-gray_900_02"}`}>
      <a href="/"
        className="font-dancingscript text-[2.5rem] text-cyan_400_dd"
      >
        Arpit Ghura
      </a>
      <div className='flex flex-row gap-5 text-green_A200_dd flex-wrap sm:hidden'>
        <a href="#hero">
          Home
        </a>
        <a href="#about">
          About
        </a>
        <a href="#education">
          Education
        </a>
        <a href="#projects">
          Projects
        </a>
        <a href="#experience">
          Experience
        </a>
      </div>
      <a href="#contact"
        className="font-semibold leading-[normal] px-3 py-2 text-center text-white_A700_dd bg-cyan-400 rounded-[20px]"
      >
        Hire Me
      </a>
    </header>
  )
}

export default Navbar