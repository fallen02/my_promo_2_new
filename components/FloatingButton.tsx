"use client"
import { IconBrandWhatsapp } from "@tabler/icons-react"
import {motion} from 'motion/react'

export const FloatingButton  = () => {
    return(
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        className="bottom-5 right-5 fixed z-[99999]"
        >
            <a className="cursor-pointer"  href="https://www.google.com">
            <div className="bg-orange-500/30 p-1.5 rounded-full">
                <IconBrandWhatsapp className="text-green-500 size-9"/>
            </div>
            </a>
        </motion.div>
    )
}