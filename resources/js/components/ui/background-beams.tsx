"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const paths = [
        "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
        "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
        "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
        "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    ];

    return (
        <div
            className={cn(
                "absolute inset-0 flex items-center justify-center overflow-hidden",
                className
            )}
        >
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                width="100%"
                height="100%"
                viewBox="0 0 696 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {paths.map((path, index) => (
                    <motion.path
                        key={`path-${index}`}
                        d={path}
                        stroke={`url(#linearGradient-${index})`}
                        strokeOpacity="0.4"
                        strokeWidth="0.5"
                    />
                ))}
                <defs>
                    {paths.map((_, index) => (
                        <motion.linearGradient
                            key={`gradient-${index}`}
                            id={`linearGradient-${index}`}
                            initial={{
                                x1: "0%",
                                x2: "0%",
                                y1: "0%",
                                y2: "0%",
                            }}
                            animate={{
                                x1: ["0%", "100%"],
                                x2: ["0%", "95%"],
                                y1: ["0%", "100%"],
                                y2: ["0%", `${93 + Math.random() * 8}%`],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        >
                            <stop stopColor="hsl(var(--primary))" stopOpacity="0" />
                            <stop stopColor="hsl(var(--primary))" />
                            <stop offset="0.325" stopColor="hsl(var(--secondary))" />
                            <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
                        </motion.linearGradient>
                    ))}
                </defs>
            </svg>
        </div>
    );
};
