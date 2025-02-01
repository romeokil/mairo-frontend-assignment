import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
function Slider() {
  const [color,changecolor]=useState("green");
  return (
    <>
        <input type="range" val="50" className="w-full h-1 bg-gray-400 rounded-full 
        " onChange={(e)=>{handleClick(e.target.val)}}/>
    </>
      )
}

      export default Slider