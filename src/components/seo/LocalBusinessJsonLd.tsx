import { BUSINESS_NAME, PHONE_NUMBER, EMAIL } from "@/lib/constants";

export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": BUSINESS_NAME,
        "image": "https://deckingportmacquarie.com.au/gallery/mannys-deck.png",
        "logo": "https://deckingportmacquarie.com.au/logo/cropped-decking-logo-2-1.jpg",
        "telephone": PHONE_NUMBER,
        "email": EMAIL,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Port Macquarie",
            "addressRegion": "NSW",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -31.4333,
            "longitude": 152.9
        },
        "url": "https://deckingportmacquarie.com.au",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "07:00",
                "closes": "17:00"
            }
        ],
        "areaServed": [
            "Port Macquarie",
            "Wauchope",
            "Lake Cathie",
            "Bonny Hills",
            "Laurieton",
            "Kempsey"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
