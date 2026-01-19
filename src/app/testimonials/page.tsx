import { Section, Container } from "@/components/layout";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function TestimonialsPage() {
    return (
        <div className="pt-20">
            <Section className="pb-8">
                <Button variant="ghost" asChild className="-ml-4 gap-2 mb-8">
                    <Link href="/">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Customer Reviews</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Hear from our happy clients across the Port Macquarie region. We pride ourselves on quality workmanship and reliable service.
                </p>
            </Section>

            <Testimonials />

            <Section className="bg-primary text-white py-16 md:py-24">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 italic">"The best decision we made for our backyard renovation."</h2>
                    <p className="text-lg opacity-90 mb-8">— Happy Customer, Bonny Hills</p>
                    <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-none h-14 px-8 text-lg font-bold" asChild>
                        <Link href="/contact">Request Your Own Quote</Link>
                    </Button>
                </div>
            </Section>
        </div>
    );
}
