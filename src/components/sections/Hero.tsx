import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";

export function Hero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-16 md:pt-20">
            {/* Background Image */}
            <Image
                src="/gallery/mannys-deck.png"
                alt="Quality timber deck in Port Macquarie"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

            {/* Content */}
            <Container className="relative z-10 text-white">
                <div className="max-w-3xl">
                    <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-md">
                        <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
                        Serving Port Macquarie & Region
                    </div>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Decking & Outdoor Carpentry in Port Macquarie
                    </h1>

                    <p className="mb-10 text-lg font-medium text-stone-200 md:text-xl lg:text-2xl">
                        Family-run. Owner onsite. Quality craftsmanship.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl sm:w-auto" asChild>
                            <a href={PHONE_LINK}>
                                <Phone className="mr-2 h-5 w-5" />
                                Call {PHONE_NUMBER}
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 border-white/30 bg-white/10 px-8 text-lg font-bold text-white shadow-xl backdrop-blur-md hover:bg-white hover:text-black sm:w-auto"
                            asChild
                        >
                            <Link href="#contact">
                                Request a Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-stone-300">
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            Free On-site Quotes
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            Fully Licensed & Insured
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            Premium Materials
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
