import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { to, subject, text } = await req.json();

        if (!subject || !text) {
            return new Response(
                JSON.stringify({ error: "Missing required fields" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify transporter
        await transporter.verify();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to || process.env.NOTIFICATION_EMAIL, 
            subject,
            text,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);

        return new Response(
            JSON.stringify({ message: "Email sent successfully" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ error: "Failed to send email" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
