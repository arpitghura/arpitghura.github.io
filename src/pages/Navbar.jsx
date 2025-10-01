import React, { useEffect, useState } from 'react'
import '../styles/utility.css'

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
    <header className='flex flex-row sm:gap-5 items-center justify-between py-3 px-6 sm:top-auto top-0 sticky z-50 text-green_200 blurNav'>
      <a href="/"
        className="font-dancingscript text-[2.5rem] text-green_A200 transition-colors"
      >
        Arpit Ghura
      </a>
      <div className='flex flex-row gap-5 flex-wrap sm:hidden'>
        <a className='hover:text-green_A200 border-b border-transparent hover:border-green_A200 p-1 transition-colors' href="#hero">
          Home
        </a>
        <a className='hover:text-green_A200 border-b border-transparent hover:border-green_A200 p-1 transition-colors' href="#about">
          About
        </a>
        <a className='hover:text-green_A200 border-b border-transparent hover:border-green_A200 p-1 transition-colors' href="#education">
          Education
        </a>
        <a className='hover:text-green_A200 border-b border-transparent hover:border-green_A200 p-1 transition-colors' href="#projects">
          Projects
        </a>
        <a className='hover:text-green_A200 border-b border-transparent hover:border-green_A200 p-1 transition-colors' href="#experience">
          Experience
        </a>
      </div>
      <a href="#contact"
        className="font-semibold leading-[normal] px-5 py-2 text-center text-gray-200 bg-green_A200_dd rounded-[20px] border border-blue_900 hover:bg-green_800 hover:border-gray_700 transition-colors"
      >
        Hire Me
      </a>
    </header>
  )
}

export default Navbar