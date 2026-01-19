import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import {
    BUSINESS_NAME,
    LOGO_PATH,
    EMAIL,
    NAV_LINKS,
    PHONE_LINK,
    PHONE_NUMBER,
    SERVICE_AREAS,
} from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/50">
            <Container>
                <div className="grid gap-8 py-12 md:grid-cols-3">
                    {/* Business Info */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-lg border shadow-sm">
                                <Image
                                    src={LOGO_PATH}
                                    alt={BUSINESS_NAME}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold">{BUSINESS_NAME}</h3>
                        </div>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Quality timber and composite decking for homes across the Port
                            Macquarie region.
                        </p>
                        <div className="space-y-1 text-sm">
                            <p>
                                <a
                                    href={PHONE_LINK}
                                    className="font-medium hover:text-primary hover:underline"
                                >
                                    {PHONE_NUMBER}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="text-muted-foreground hover:text-primary hover:underline"
                                >
                                    {EMAIL}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary hover:underline"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/gallery"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline"
                            >
                                Full Gallery
                            </Link>
                        </nav>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Service Areas</h3>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                            {SERVICE_AREAS.map((area) => (
                                <li key={area}>{area}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t py-6 text-center text-sm text-muted-foreground">
                    <p>
                        © {currentYear} {BUSINESS_NAME}. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
