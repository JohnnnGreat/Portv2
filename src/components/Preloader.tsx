"use client";
import { useEffect, useState } from "react";

const TypewriterLoader = () => {
   const [text, setText] = useState("");
   const [isLoading, setIsLoading] = useState(true); // state to track loading

   const message = "Crafting something awesome for you…";

   useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
         if (i < message.length) {
            setText((prev) => prev + message.charAt(i));
            i++;
         } else {
            clearInterval(interval);
            setTimeout(() => {
               setIsLoading(false);
            }, 600);
         }
      }, 100);
      return () => clearInterval(interval);
   }, []);

   if (!isLoading) {
      return null; // When loading is done, return null to remove the loader
   }

   return (
      <div className="flex justify-center items-center h-screen">
         <div className="text-3xl font-Din">{text}</div>
      </div>
   );
};

export default TypewriterLoader;
