import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si";
import FaJava from "../assets/java-svgrepo-com.svg"

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

const TechStack = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h2>

            {/* Icons div */}
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="border-4 rounded-2xl border-neutral-800 p-2">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="border-4 rounded-2xl border-neutral-800 p-2">
                    <TbBrandNextjs className="text-7xl " />
                </motion.div>

                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="border-4 rounded-2xl border-neutral-800 p-2">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="border-4 rounded-2xl border-neutral-800 p-2">
                    <SiExpress className="text-7xl " />
                </motion.div>

                <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="border-4 rounded-2xl border-neutral-800 p-2">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="border-4 rounded-2xl border-neutral-800 p-2">
                    <img src={FaJava} alt="" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default TechStack
