"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Container } from "./Container";
import Image from "next/image";
import { BUSINESS_NAME, LOGO_PATH, NAV_LINKS, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getHref = (href: string) => href;

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-200",
                scrolled
                    ? "border-b bg-background/80 backdrop-blur-md"
                    : "bg-background"
            )}
        >
            <Container>
                <nav className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
                        <div className="relative h-10 w-10 overflow-hidden rounded-lg border shadow-sm md:h-12 md:w-12">
                            <Image
                                src={LOGO_PATH}
                                alt={BUSINESS_NAME}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground md:text-xl lg:hidden xl:block">
                            {BUSINESS_NAME.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? "text-primary" : ""}>{word} </span>
                            ))}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={getHref(link.href)}
                                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="rounded-full shadow-md transition-all hover:scale-105 active:scale-95">
                            <a href={PHONE_LINK} className="gap-2">
                                <Phone className="h-4 w-4" />
                                {PHONE_NUMBER}
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex items-center gap-2 md:hidden">
                        <Button asChild size="sm" className="rounded-full shadow-sm">
                            <a href={PHONE_LINK} className="gap-2 px-3">
                                <Phone className="h-4 w-4" />
                                Call
                            </a>
                        </Button>
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:bg-muted" aria-label="Open menu">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <SheetTitle className="text-left mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="relative h-10 w-10 overflow-hidden rounded-lg border shadow-sm">
                                            <Image
                                                src={LOGO_PATH}
                                                alt={BUSINESS_NAME}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-lg font-bold tracking-tight">{BUSINESS_NAME}</span>
                                    </div>
                                </SheetTitle>
                                <nav className="flex flex-col gap-6">
                                    {NAV_LINKS.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={getHref(link.href)}
                                            onClick={() => setOpen(false)}
                                            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="mt-4 border-t pt-8">
                                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60 mb-3">Direct Contact</p>
                                        <a
                                            href={PHONE_LINK}
                                            className="flex items-center gap-3 text-xl font-bold text-primary transition-opacity hover:opacity-80"
                                        >
                                            <Phone className="h-5 w-5" />
                                            {PHONE_NUMBER}
                                        </a>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
