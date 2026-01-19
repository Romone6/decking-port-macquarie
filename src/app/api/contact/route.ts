import { NextResponse } from "next/server";
import { Resend } from "resend";

// NOTE: Add RESEND_API_KEY to your .env.local file
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, website } = body;

        // 1. Honeypot check for bots
        if (website) {
            console.log("Bot detected via honeypot field");
            return NextResponse.json({ success: true }, { status: 200 }); // Silent fail for bots
        }

        // 2. Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        console.log("Contact form submission received:", { name, email, phone, message });

        // 3. Send email via Resend if API key is configured
        if (resend) {
            try {
                await resend.emails.send({
                    from: "Decking PM Website <onboarding@resend.dev>", // Replace with verified domain in production
                    to: ["Deckingpm@gmail.com"], // Replace with real business email
                    subject: `New Quote Request from ${name}`,
                    replyTo: email,
                    html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
                });
            } catch (emailError) {
                console.error("Error sending email via Resend:", emailError);
                // We continue to return success if we logged it, but maybe let user know
            }
        } else {
            console.warn("Resend API key not found. Form submission logged but email not sent.");
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
