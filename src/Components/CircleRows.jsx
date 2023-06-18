import React from 'react'

const CircleRows = ({ Image, title }) => {
  return (
    <div>
      <a className="flex flex-col items-center my-2" href="#">
          <div className="h-12 w-12">
            <img className="w-full cursor-pointer" src={Image} alt="" />
          </div>
          <span className="items-center mt-1" style={{fontSize:"11px"}}>{title}</span>
        </a>
    </div>
  )
}

export default CircleRows

