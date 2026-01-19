import { Section, Container } from "@/components/layout";
import { Contact } from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Section className="pb-8">
                <Button variant="ghost" asChild className="-ml-4 gap-2 mb-8">
                    <Link href="/">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Get a Quote</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Contact us today to arrange a free on-site consultation. We'll discuss your ideas, materials, and provide a detailed quote.
                </p>
            </Section>

            <Contact />

            <Section variant="muted" className="bg-muted/30 pt-0">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">Expert Advice</h3>
                        <p className="text-sm text-muted-foreground">Detailed site assessments and material recommendations.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">Licensed & Insured</h3>
                        <p className="text-sm text-muted-foreground">Certified professionals you can trust with your home.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm border">
                        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold mb-2">Local Knowledge</h3>
                        <p className="text-sm text-muted-foreground">Materials chosen specifically for the Port Macquarie climate.</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
