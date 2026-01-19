import { Quote } from "lucide-react";
import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-background">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">What Our Clients Say</h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-primary" />
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We take pride in every project we complete. Here is some feedback from our local clients.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((testimonial, i) => (
                    <Card key={i} className="relative overflow-hidden border-muted transition-all hover:shadow-md">
                        <CardContent className="pt-8">
                            <Quote className="absolute -top-4 -left-2 h-16 w-16 text-primary/5 -rotate-12" />
                            <div className="relative">
                                <p className="mb-6 text-lg italic text-muted-foreground leading-relaxed font-medium">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex flex-col">
                                    <span className="font-bold text-foreground">{testimonial.name}</span>
                                    <span className="text-sm text-primary uppercase tracking-wider font-semibold">
                                        {testimonial.location}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
