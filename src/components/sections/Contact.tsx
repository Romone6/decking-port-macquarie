"use client";

import { useState } from "react";
import { Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PHONE_NUMBER, PHONE_LINK, EMAIL } from "@/lib/constants";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            setError("Please fill in all required fields.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message. Please try again later.");
            }

            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" className="bg-muted/30">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Contact Us</h2>
                <div className="mx-auto mt-4 h-1 w-20 bg-primary" />
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ready to transform your outdoor space? Give us a call or send a message for a free on-site quote.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0 space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Call for a Quote</h3>
                                    <p className="text-muted-foreground mb-4">Direct line to the owner.</p>
                                    <a
                                        href={PHONE_LINK}
                                        className="text-2xl font-bold text-primary hover:underline transition-all"
                                    >
                                        {PHONE_NUMBER}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground mb-4">Send us your project details anytime.</p>
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className="text-xl font-bold hover:text-primary transition-all"
                                    >
                                        {EMAIL}
                                    </a>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-muted">
                                <h4 className="font-bold mb-2">Service Region</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Based in Port Macquarie. We serve all surrounding areas including Wauchope, Lake Cathie, Bonny Hills, and Laurieton.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                    <Card className="border shadow-lg">
                        <CardContent className="p-6 md:p-10">
                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8 text-lg">
                                        Thank you for reaching out. We'll get back to you as soon as possible to discuss your project.
                                    </p>
                                    <Button variant="outline" onClick={() => setIsSuccess(false)}>
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Honeypot field for spam prevention */}
                                    <div className="hidden">
                                        <label htmlFor="website">Website</label>
                                        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">
                                                Full Name *
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Smith"
                                                required
                                                className="h-12"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider">
                                                Phone Number
                                            </label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="0400 000 000"
                                                className="h-12"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com.au"
                                            required
                                            className="h-12"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">
                                            How can we help? *
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project (size, material preference, etc.)"
                                            className="min-h-[150px] resize-none"
                                            required
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-sm font-medium text-destructive bg-destructive/10 p-4 rounded-lg">
                                            {error}
                                        </p>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full h-14 text-lg font-bold shadow-lg"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Send Quote Request
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
