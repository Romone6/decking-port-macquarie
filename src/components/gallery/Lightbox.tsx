"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

interface LightboxProps {
    images: GalleryImage[];
    initialIndex: number;
    onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
    const [index, setIndex] = useState(initialIndex);

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, next, prev]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300">
            <button
                onClick={onClose}
                className="absolute right-4 top-4 z-[110] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Close lightbox"
            >
                <X className="h-6 w-6" />
            </button>

            <button
                onClick={prev}
                className="absolute left-4 z-[110] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>

            <button
                onClick={next}
                className="absolute right-4 z-[110] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Next image"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            <div className="relative h-full w-full p-4 md:p-12 flex items-center justify-center">
                <div className="relative aspect-[3/2] w-full max-w-5xl overflow-hidden rounded-lg shadow-2xl">
                    <Image
                        src={images[index].src}
                        alt={images[index].alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        priority
                    />
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {index + 1} / {images.length}
            </div>
        </div>
    );
}
