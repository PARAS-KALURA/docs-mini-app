import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({ data , reference } ) => {
  return (
    <motion.div drag  dragConstraints= {reference} whileDrag = {{scale: 1.2}} className=" relative  flex-shrink-0 w-50 h-60 rounded-[30px]  bg-zinc-900 text-zinc-400 px-5 py-3 overflow-hidden">
      {" "}
      Card1
      <FaFileAlt />
      <p className="text-xs  leading-tight mt-4 font-semibold   ">{data.desc}</p>
      <div className="footer absolute bottom-2  w-full left-0  h-8   ">
        <div className="flex  items-center justify-between">
          <h5>{data.fileSize}</h5>
          <span className="flex items-center justify-center bg-white rounded-full w-6 h-5 ">
            {data.close ? (
              <IoIosClose />
            ) : (
              <IoMdDownload size="1em" color="#111" />
            )}
          </span>
        </div>


        {data.tag.isOpen && (
          <div className= {`tag w-full   text-white px-4 flex `} >
            <h3 className="text-xs flex items-center justify-center">
              {data.tagTitle}
            </h3>
          </div>
        )}

         {/* {data.tag.isOpen ? case1  : case2  }   */}

      

      </div>
    </motion.div>
  );
};

export default Card;
