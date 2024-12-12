"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import TypewriterLoader from "@/components/Preloader";
import { useMotionValue, useSpring, useTransform, motion, useViewportScroll } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const [pageHeight, setPageHeight] = useState(0);
   const resizePageHeight = useCallback((entries) => setPageHeight(entries[0].contentRect.height), []);
   const scrollRef = useRef(null);
   useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver(resizePageHeight);
      if (scrollRef.current) resizeObserver.observe(scrollRef.current);
      return () => resizeObserver.disconnect();
   }, [resizePageHeight]);

   const { scrollY } = useViewportScroll();
   const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
   const spring = useSpring(transform, { damping: 15, mass: 0.27, stiffness: 55 });
   return (
      <html lang="en">
         <body>
            <motion.div
               ref={scrollRef}
               style={{ y: spring }}
               className="scroll-container"
            >
               {children}
            </motion.div>
            <div style={{ height: pageHeight }} />
         </body>
      </html>
   );
}
