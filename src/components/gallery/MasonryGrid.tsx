"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, GalleryImage } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

interface MasonryGridProps {
    images?: GalleryImage[];
}

export function MasonryGrid({ images = GALLERY_IMAGES }: MasonryGridProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Simple CSS Column Masonry
    return (
        <>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
                {images.map((image, i) => (
                    <div
                        key={image.src}
                        className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border bg-muted shadow-sm transition-all hover:shadow-lg lg:cursor-zoom-in"
                        onClick={() => setLightboxIndex(i)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                            <p className="text-xs font-medium text-white line-clamp-1">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={images}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </>
    );
}
