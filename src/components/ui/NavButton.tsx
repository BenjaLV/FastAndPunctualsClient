import React from 'react'


interface Props {
    text: string;
    className: string;
  }
  
const NavButton = ({className, text}:Props) => {
  return (
    <button
    type="button"
    className={`${className} rounded-full text-center w-[270px] h-7`}
  >
    {text}
  </button>
  )
}

export default NavButton