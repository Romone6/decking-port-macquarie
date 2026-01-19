import Link from "next/link";
import { Hammer, Construction, Layout, Shield, Ruler, Layers, Settings } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES = [
    {
        title: "New Decks",
        benefit: "Custom designed timber and composite decks built to suit your lifestyle.",
        icon: Layout,
    },
    {
        title: "Repairs & Replacements",
        benefit: "Restore your existing deck to its former glory with expert maintenance.",
        icon: Hammer,
    },
    {
        title: "Pergolas",
        benefit: "Extend your living space with a beautiful, functional outdoor structure.",
        icon: Construction,
    },
    {
        title: "Privacy Screens",
        benefit: "Modern timber and aluminum solutions for a more private sanctuary.",
        icon: Shield,
    },
    {
        title: "Balustrades",
        benefit: "Safety meets style with premium timber and wire balustrade systems.",
        icon: Ruler,
    },
    {
        title: "Exterior Stairs",
        benefit: "Durable and safe access solutions for sloping sites and split levels.",
        icon: Layers,
    },
    {
        title: "General Carpentry",
        benefit: "Expert craftsmanship for all your custom outdoor timber projects.",
        icon: Settings,
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-background">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Our Services</h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-primary" />
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    From full new builds to minor repairs, we bring professional craftsmanship to every outdoor project in Port Macquarie.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service) => (
                    <Card key={service.title} className="flex flex-col transition-all hover:shadow-md border-muted">
                        <CardHeader>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <service.icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-grow flex-col justify-between">
                            <p className="text-muted-foreground leading-relaxed">
                                {service.benefit}
                            </p>
                            <Link
                                href="#contact"
                                className="mt-6 inline-flex items-center text-sm font-bold text-primary hover:underline group"
                            >
                                Enquire Now
                                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
