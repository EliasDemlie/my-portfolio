import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            // Configure the transporter
            const transporter = nodemailer.createTransport({
                service: "Gmail", // Change to your email service provider if not using Gmail
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // Email options
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to,
                subject,
                text,
            };

            // Send email
            const info = await transporter.sendMail(mailOptions);
            console.log("Email sent:", info.messageId);

            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Failed to send email" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
