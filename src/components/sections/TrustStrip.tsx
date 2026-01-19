import { Users, UserCheck, Award, Hammer } from "lucide-react";
import { Container, Section } from "@/components/layout";

const TRUST_POINTS = [
    {
        title: "Local Family Business",
        description: "Proudly serving Port Macquarie and the Mid North Coast with local values.",
        icon: Users,
    },
    {
        title: "Owner Onsite Every Job",
        description: "I personally oversee and work on every project to ensure our high standards are met.",
        icon: UserCheck,
    },
    {
        title: "Quality over Quantity",
        description: "We don't rush. We take the time to deliver a premium finish that stands the test of time.",
        icon: Award,
    },
    {
        title: "Repairs & Replacements",
        description: "From a full new deck to simple maintenance or repairs, no job is too small.",
        icon: Hammer,
    },
];

export function TrustStrip() {
    return (
        <Section variant="muted" className="border-y bg-muted/30 py-12 md:py-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {TRUST_POINTS.map((point) => (
                    <div key={point.title} className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <point.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 font-bold leading-tight">{point.title}</h3>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
