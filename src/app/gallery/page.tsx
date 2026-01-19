import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";

export default function GalleryPage() {
    return (
        <div className="pt-20">
            <Section>
                <div className="mb-8">
                    <Button variant="ghost" asChild className="-ml-4 gap-2">
                        <Link href="/">
                            <ChevronLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                <div className="mb-16">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Our Project Gallery</h1>
                    <div className="mt-4 h-1 w-20 bg-primary" />
                    <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                        A complete showcase of our decking, pergolas, and outdoor carpentry projects completed in Port Macquarie and surroundings.
                    </p>
                </div>

                <MasonryGrid />

                <div className="mt-24 rounded-2xl bg-muted/50 p-8 text-center md:p-16">
                    <h2 className="text-3xl font-bold mb-4">Inspired by our work?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                        Contact us today for a free on-site consultation and quote for your own outdoor living project.
                    </p>
                    <Button size="lg" className="rounded-full shadow-lg h-14 px-12 text-lg" asChild>
                        <Link href="/#contact">Get Your Free Quote</Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
