import React, { useRef, useState } from 'react'
import Card from './Card'
import { motion } from "motion/react"

const Fourground = () => {



  const ref = useRef(null);
   

  const data = [
    {desc : "This is data desc",
      fileSize  : ".9mb",
      close : false,
      tag : {isOpen: true,  tagTitle : "Download Now" , tagColor: "green"},
    },

    {desc : "This is data desc",
      fileSize  : ".9mb",
      close : false,
      tag : {isOpen: true,  tagTitle : "Download Now" , tagColor: "green"},
    },

    {desc : "This is data desc",
      fileSize  : ".9mb",
      close : false,
      tag : {isOpen: true,  tagTitle : "Download Now" , tagColor: "green"},
    },

    {desc : "This is data desc",
      fileSize  : ".9mb",
      close : false,
      tag : {isOpen: true,  tagTitle : "Download Now" , tagColor: "green"},
    },

    {desc : "This is data desc",
      fileSize  : ".9mb",
      close : false,
      tag : {isOpen: true,  tagTitle : "Download Now" , tagColor: "green"},
    },

  ];
   
   

  return (
    
        <div  ref = {ref} className=' fixed  top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5' >

      
    {data.map((item,index) => (
      <Card  data={item} reference = {ref} />
    ))}

</div>

    
  )
}

export default Fourground

