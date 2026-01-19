import { Section, Container } from "@/components/layout";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { CircularGallery } from "@/components/gallery/CircularGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";

export default function GalleryPage() {
    return (
        <div className="pt-20">
            <Section className="pb-8">
                <Button variant="ghost" asChild className="-ml-4 gap-2 mb-8">
                    <Link href="/">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6 text-center">Project Gallery</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center mb-12">
                    Explore our recent decking, pergola, and outdoor carpentry projects completed in Port Macquarie and surrounding areas.
                </p>
            </Section>

            {/* Interactive Experience */}
            <div className="hidden lg:block mb-20">
                <Section className="pt-0">
                    <div className="rounded-3xl overflow-hidden border bg-muted/10 shadow-inner">
                        <CircularGallery />
                    </div>
                </Section>
            </div>

            <Section>
                <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-3xl font-bold tracking-tight">Full Project Collection</h2>
                    <div className="h-1 flex-grow bg-muted mx-4 hidden md:block" />
                    <p className="text-sm text-muted-foreground italic">Click any image to enlarge</p>
                </div>
                <MasonryGrid />
            </Section>

            <Section variant="muted" className="bg-muted/30">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Inspired by our work?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Tell us about your project and we'll help you bring it to life with quality materials and expert craftsmanship.
                    </p>
                    <Button size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                        <a href={PHONE_LINK}>
                            <Phone className="mr-2 h-5 w-5" />
                            Call {PHONE_NUMBER}
                        </a>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
