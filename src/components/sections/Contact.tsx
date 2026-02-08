"use client";

import { useState } from "react";
import { Phone, Mail, Clock, ShieldCheck, MapPin, Send } from "lucide-react";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PHONE_NUMBER, PHONE_LINK, EMAIL } from "@/lib/constants";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Quote Request from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Phone: ${formData.phone}\n` +
            `Email: ${formData.email}\n\n` +
            `Project Details:\n${formData.message}`
        );

        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

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

                        {/* Quote Request Form Card */}
                        <Card className="border-2 border-primary/20 shadow-xl hover:border-primary transition-all duration-300 overflow-hidden">
                            <CardContent className="p-8 relative">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <Mail className="h-32 w-32 -mr-12 -mt-12 -rotate-12" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="bg-primary text-white p-3 rounded-2xl shadow-lg shadow-primary/20">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black uppercase tracking-tight">Request a Quote</h3>
                                            <p className="text-sm text-muted-foreground">We'll call you back promptly</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="h-12 rounded-xl border-2 focus:border-primary"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-semibold">
                                                Phone Number <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="h-12 rounded-xl border-2 focus:border-primary"
                                            />
                                            <p className="text-xs text-muted-foreground">Required so we can call you back</p>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-semibold">Email (optional)</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Your email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-12 rounded-xl border-2 focus:border-primary"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm font-semibold">Project Details</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Tell us about your decking project..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={3}
                                                className="rounded-xl border-2 focus:border-primary resize-none"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full h-14 text-lg font-black rounded-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all gap-2"
                                        >
                                            <Send className="h-5 w-5" />
                                            Send Quote Request
                                        </Button>
                                    </form>
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
