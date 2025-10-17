"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
    id?: string;
    className?: string;
    background?: string;
    particleSize?: number;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
}

export function SparklesCore({
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
}: SparklesProps) {
    const [particles, setParticles] = useState<any[]>([]);
    const generatedId = useId();
    const effectId = id || generatedId;

    useEffect(() => {
        const createParticle = () => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            size:
                Math.random() * ((maxSize || 3) - (minSize || 1)) +
                (minSize || 1),
            duration: Math.random() * (speed || 4) + (speed || 2),
            delay: Math.random() * 2,
        });

        const particleCount = particleDensity || 100;
        const newParticles = Array.from(
            { length: particleCount },
            createParticle
        );
        setParticles(newParticles);

        const interval = setInterval(() => {
            setParticles((prevParticles) => {
                const updatedParticles = prevParticles.filter(
                    () => Math.random() > 0.1
                );
                if (updatedParticles.length < particleCount) {
                    updatedParticles.push(createParticle());
                }
                return updatedParticles;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [minSize, maxSize, speed, particleDensity]);

    return (
        <div
            className={cn("absolute inset-0", className)}
            style={{ background: background || "transparent" }}
        >
            <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id={`gradient-${effectId}`}>
                        <stop
                            offset="0%"
                            stopColor={particleColor || "#60A5FA"}
                            stopOpacity="1"
                        />
                        <stop
                            offset="100%"
                            stopColor={particleColor || "#60A5FA"}
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>
                <AnimatePresence>
                    {particles.map((particle) => (
                        <motion.circle
                            key={particle.id}
                            cx={`${particle.x}%`}
                            cy={`${particle.y}%`}
                            r={particle.size}
                            fill={`url(#gradient-${effectId})`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                                duration: particle.duration,
                                delay: particle.delay,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 2,
                            }}
                        />
                    ))}
                </AnimatePresence>
            </svg>
        </div>
    );
}
