"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BackgroundLogo = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        controls.start({ y: -5 });
      }
      else if (currentScrollY < lastScrollY) {
        controls.start({ y: 5 });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <>
      <motion.div
        style={{ position: "fixed", top: 0, right: 0, zIndex: -999, filter: "brightness(0.5)", opacity: "0.1" }}
        animate={controls}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <Image
          src={"/background-logo.webp"}
          height={674}
          width={705}
          unoptimized={true}
          priority={true}
          alt="Background Image"
          style={{ transform: "rotate(0deg)" }}
        />
      </motion.div>
    </>

  );
};

export default BackgroundLogo;