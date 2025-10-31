"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
    children: ReactNode;
    delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: false,       
        amount: 0.3          
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
            transition={{ duration: 1.0, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
