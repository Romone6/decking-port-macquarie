import { Check, AlertCircle, Info } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MATERIALS = {
    composite: {
        title: "Composite Decking",
        subtitle: "Modern Performance",
        pros: [
            "Extremely low maintenance (no oiling or sanding)",
            "Resistant to rot, warp, and splinters",
            "Termite and mold resistant",
            "Excellent slip ratings for around pools",
            "Consistent color and texture",
        ],
        cons: [
            "Higher upfront material cost",
            "Retains more heat in direct sun",
        ],
    },
    timber: {
        title: "Natural Timber",
        subtitle: "Classic Aesthetics",
        pros: [
            "Traditional natural grain and texture",
            "Lower upfront material cost",
            "Remains cooler underfoot than composite",
            "Can be stained or painted any color",
        ],
        cons: [
            "Requires regular oiling or staining",
            "Prone to splintering, warping, and rot over time",
            "High ongoing maintenance time/cost",
        ],
    },
};

export function Materials() {
    return (
        <Section id="materials" variant="muted" className="bg-muted/30">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Choosing Your Material</h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-primary" />
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We work with both premium timber and high-end composites. Here is how they compare to help you decide.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Composite Card */}
                <Card className="border-primary/20 shadow-sm overflow-hidden h-full">
                    <div className="bg-primary px-6 py-2 text-center text-xs font-bold uppercase tracking-widest text-white">
                        Recommended for Low Maintenance
                    </div>
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-3xl">{MATERIALS.composite.title}</CardTitle>
                        <p className="text-primary font-medium">{MATERIALS.composite.subtitle}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                                <Check className="h-4 w-4 text-primary" />
                                The Benefits
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                                {MATERIALS.composite.pros.map((pro) => (
                                    <li key={pro} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Timber Card */}
                <Card className="border-muted shadow-sm overflow-hidden h-full">
                    <div className="bg-muted-foreground/10 px-6 py-2 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        The Classic Choice
                    </div>
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-3xl">{MATERIALS.timber.title}</CardTitle>
                        <p className="text-muted-foreground font-medium">{MATERIALS.timber.subtitle}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                                <Check className="h-4 w-4 text-muted-foreground" />
                                The Benefits
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                                {MATERIALS.timber.pros.map((pro) => (
                                    <li key={pro} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />
                                        {pro}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-3 pt-2">
                            <h4 className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                                <AlertCircle className="h-4 w-4 text-amber-600" />
                                Considerations
                            </h4>
                            <ul className="space-y-2 text-muted-foreground italic">
                                {MATERIALS.timber.cons.map((con) => (
                                    <li key={con}>{con}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Pricing Note */}
            <div className="mt-12 rounded-xl bg-background border p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Info className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-1">The Pricing Reality</h4>
                    <p className="text-muted-foreground">
                        While timber has a lower initial material cost, high-quality composite often pays for itself within 5–7 years
                        when you account for the cost of oils, stains, and the labor required to maintain a natural wood deck.
                        We can provide quotes for both options during your site visit.
                    </p>
                </div>
            </div>
        </Section>
    );
}
