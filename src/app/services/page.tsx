import { Section, Container } from "@/components/layout";
import { Services } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { PHONE_LINK, PHONE_NUMBER, MAILTO_LINK } from "@/lib/constants";

export default function ServicesPage() {
    return (
        <div className="pt-20">
            <Section className="pb-8">
                <Button variant="ghost" asChild className="-ml-4 gap-2 mb-8">
                    <Link href="/">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">Our Services</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-12">
                    From design to completion, we offer a full range of outdoor carpentry services in Port Macquarie.
                </p>
            </Section>

            <Services />

            <Section variant="muted" className="bg-muted/30">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to discuss your project?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        We provide free on-site quotes and expert advice tailored to your specific outdoor space and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                            <a href={PHONE_LINK}>
                                <Phone className="mr-2 h-5 w-5" />
                                Call {PHONE_NUMBER}
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                            <a href={MAILTO_LINK}>
                                Email for a Quote
                            </a>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
