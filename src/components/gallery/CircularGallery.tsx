"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

export function CircularGallery() {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const controls = useAnimation();

    // Use 8 images for a balanced circle
    const images = GALLERY_IMAGES.slice(0, 8);

    const animatePopOut = useCallback(() => {
        controls.start((i) => ({
            x: Math.cos((i / images.length) * 2 * Math.PI) * 320,
            y: Math.sin((i / images.length) * 2 * Math.PI) * 320,
            scale: 1,
            opacity: 1,
            zIndex: 10,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: i * 0.08,
            },
        }));
    }, [controls, images.length]);

    const animateReset = useCallback(() => {
        controls.start({
            x: 0,
            y: 0,
            scale: 0.2,
            opacity: 0,
            zIndex: 0,
            transition: { type: "spring", stiffness: 200, damping: 25 },
        });
    }, [controls]);

    useEffect(() => {
        if (isHovered) {
            animatePopOut();
        } else {
            animateReset();
        }
    }, [isHovered, animatePopOut, animateReset]);

    return (
        <div className="relative flex h-[850px] w-full items-center justify-center overflow-hidden bg-background">
            {/* Ambient Background Effect */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />

            {/* Instructions Overlay */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60">Signature Projects</p>
            </div>

            {/* Central Interactive Controller */}
            <motion.div
                className="group relative z-50 flex h-56 w-56 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-[0_0_50px_rgba(22,101,52,0.3)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(22,101,52,0.5)]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                    scale: isHovered ? 1.05 : 1,
                }}
            >
                {/* Rotating Border Glow */}
                <motion.div
                    className="absolute inset-[-4px] rounded-full border-2 border-dashed border-white/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative text-center p-6 space-y-1">
                    <motion.p
                        className="text-xs font-black uppercase tracking-[0.15em] text-white/70"
                        animate={{ opacity: isHovered ? 0 : 1 }}
                    >
                        Hover To View
                    </motion.p>
                    <h3 className="text-3xl font-black tracking-tight leading-none group-hover:scale-110 transition-transform">
                        PORTFOLIO<br />REVOLUTION
                    </h3>
                    <motion.div
                        className="h-1 w-12 bg-white/40 mx-auto rounded-full mt-2"
                        animate={{ width: isHovered ? 40 : 20 }}
                    />
                </div>
            </motion.div>

            {/* Circular Image Experience */}
            <motion.div
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                {images.map((image, i) => (
                    <motion.div
                        key={image.src}
                        custom={i}
                        animate={controls}
                        initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                        className="absolute pointer-events-auto"
                    >
                        {/* Counter-rotation to keep image upright */}
                        <motion.div
                            animate={isHovered ? { rotate: -360 } : { rotate: 0 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="group relative h-48 w-72 cursor-pointer overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl transition-all duration-500 hover:scale-110 hover:z-50"
                            onClick={() => setSelectedIndex(i)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="300px"
                                priority
                            />
                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Project 0{i + 1}</p>
                                <h4 className="text-xs font-bold text-white leading-tight uppercase tracking-tight">{image.alt}</h4>
                            </div>

                            {/* Interactive Click Hint */}
                            <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-lg font-bold">+</span>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox Integration */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <Lightbox
                        images={images}
                        initialIndex={selectedIndex}
                        onClose={() => setSelectedIndex(null)}
                    />
                )}
            </AnimatePresence>

            {/* Viewport Polish */}
            <div className="absolute inset-x-0 bottom-12 text-center pointer-events-none opacity-40">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground italic">Bringing Quality to Life</p>
            </div>
        </div>
    );
}
