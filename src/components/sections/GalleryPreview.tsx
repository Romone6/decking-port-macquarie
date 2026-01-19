import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/data/gallery";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
    const previewImages = GALLERY_IMAGES.slice(0, 12);

    return (
        <Section id="gallery" variant="muted" className="bg-muted/30">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Our Recent Work</h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-primary" />
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Take a look at some of our timber and composite decking projects recently completed across Port Macquarie.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                {previewImages.map((image, i) => (
                    <Link
                        key={image.src}
                        href={`/gallery?idx=${i}`}
                        className="group relative aspect-square overflow-hidden rounded-lg border bg-muted shadow-sm"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                    <Link href="/gallery" className="gap-2">
                        View Full Gallery
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </Section>
    );
}
