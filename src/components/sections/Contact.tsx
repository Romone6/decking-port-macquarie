"use client";

import { Phone, Mail, Instagram, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PHONE_NUMBER, PHONE_LINK, EMAIL, MAILTO_LINK } from "@/lib/constants";

export function Contact() {
    return (
        <Section id="contact" className="bg-muted/10 overflow-hidden relative">
            {/* Background Polish */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-black tracking-tight md:text-6xl text-foreground">Get Your Free Quote</h2>
                    <div className="mx-auto mt-6 h-1.5 w-24 bg-primary rounded-full" />
                    <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                        Communication is key. Reach out directly to the owner for expert advice and a prompt on-site assessment.
                    </p>
                </div>

                <div className="grid gap-8 max-w-5xl mx-auto">
                    {/* Primary Contact Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Phone Card */}
                        <Card className="border-2 border-primary/20 shadow-xl hover:border-primary transition-all duration-300 group overflow-hidden">
                            <CardContent className="p-8 md:p-12 text-center relative">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Phone className="h-32 w-32 -mr-12 -mt-12 rotate-12" />
                                </div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="bg-primary text-white p-5 rounded-3xl mb-6 shadow-lg shadow-primary/20">
                                        <Phone className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Speak to the owner</h3>
                                    <p className="text-muted-foreground mb-8 font-medium">For immediate assistance and onsite bookings.</p>
                                    <Button size="lg" className="h-16 px-10 text-xl font-black rounded-2xl w-full sm:w-auto shadow-xl hover:scale-105 active:scale-95 transition-all" asChild>
                                        <a href={PHONE_LINK}>
                                            {PHONE_NUMBER}
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Email Card */}
                        <Card className="border-2 border-primary/20 shadow-xl hover:border-primary transition-all duration-300 group overflow-hidden bg-primary text-white">
                            <CardContent className="p-8 md:p-12 text-center relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Mail className="h-32 w-32 -mr-12 -mt-12 -rotate-12" />
                                </div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="bg-white text-primary p-5 rounded-3xl mb-6 shadow-lg">
                                        <Mail className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Email for a quote</h3>
                                    <p className="text-primary-foreground/80 mb-8 font-medium">Send project details & photos directly to us.</p>
                                    <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-black rounded-2xl w-full sm:w-auto bg-white text-primary hover:bg-white/90 border-none shadow-xl hover:scale-105 active:scale-95 transition-all outline-none" asChild>
                                        <a href={MAILTO_LINK}>
                                            {EMAIL}
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid gap-6 md:grid-cols-3 pt-12">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow-sm border text-primary">
                                <Clock className="h-7 w-7" />
                            </div>
                            <h4 className="font-black uppercase tracking-widest text-xs">Prompt Service</h4>
                            <p className="text-sm text-muted-foreground font-medium">Quotes within 48 hours of assessment.</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow-sm border text-primary">
                                <ShieldCheck className="h-7 w-7" />
                            </div>
                            <h4 className="font-black uppercase tracking-widest text-xs">Licensed & Insured</h4>
                            <p className="text-sm text-muted-foreground font-medium">Fully certified local tradesman.</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white shadow-sm border text-primary">
                                <MapPin className="h-7 w-7" />
                            </div>
                            <h4 className="font-black uppercase tracking-widest text-xs">Based in Port Mac</h4>
                            <p className="text-sm text-muted-foreground font-medium">Proudly serving the entire Mid North Coast.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
