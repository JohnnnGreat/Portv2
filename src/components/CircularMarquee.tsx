import { motion } from "framer-motion";

const CircleMarquee = () => {
   const text = "ADEOLA • "; // The text to repeat
   const repeatedText = Array(10).fill(text).join(""); // Repeats the text 10 times

   return (
      <div className="relative flex items-center justify-center w-60 h-60 rounded-full bg-black">
         {/* Rotating Text */}
         <motion.div
            className="absolute w-full h-full text-white"
            animate={{ rotate: 360 }}
            transition={{
               repeat: Infinity,
               ease: "linear",
               duration: 10, // Adjust rotation speed
            }}
         >
            <div
               className="absolute w-full h-full flex items-center justify-center"
               style={{ transform: "rotate(0deg)" }}
            >
               <p
                  className="text-[12px] font-bold uppercase tracking-wider"
                  style={{
                     transformOrigin: "center",
                     whiteSpace: "nowrap",
                  }}
               >
                  {repeatedText}
               </p>
            </div>
         </motion.div>

         {/* Center Dot */}
         <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
   );
};

export default CircleMarquee;
