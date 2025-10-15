"use client";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "motion/react";

export const FloatingButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bottom-5 right-5 fixed z-[99]"
    >
      <a
        className="cursor-pointer"
        href="https://wa.me/+918609683355"
        target="_blank"
      >
        <div className="bg-orange-500/30 py-1.5 px-2 rounded-full flex flex-row gap-2 justify-center items-center">
          <p>Chat With us</p>
          <IconBrandWhatsapp className="text-green-500 size-9" />
        </div>
      </a>
    </motion.div>
  );
};
