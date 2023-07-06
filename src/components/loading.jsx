import React from 'react'
import Lottie from "lottie-react";
import animationdata from "../assets/100721-food-loading-animation.json";

export default function Loading() {
  return (
    <div className=' flex  h-screen items-center justify-center'>
         <Lottie style={{height:"720px"}} loop={true} animationData={animationdata} />
    </div>
  )
}
