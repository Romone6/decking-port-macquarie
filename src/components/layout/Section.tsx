import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "muted";
}

export function Section({
    children,
    className,
    id,
    variant = "default",
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                variant === "muted" && "bg-muted",
                className
            )}
        >
            <Container>{children}</Container>
        </section>
    );
}
