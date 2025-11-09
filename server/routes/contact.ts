import { RequestHandler } from "express";
import { ContactFormData, ContactFormResponse } from "@shared/api";

export const handleContact: RequestHandler = async (req, res) => {
  const { name, email, message } = req.body as ContactFormData;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields",
    } as ContactFormResponse);
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    } as ContactFormResponse);
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return res.status(500).json({
        success: false,
        message: "Email service is not properly configured",
      } as ContactFormResponse);
    }

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "noreply@resend.dev",
        to: email,
        subject: "Thank you for contacting Creative Studio",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000;">Thank you, ${name}!</h2>
            <p style="color: #555;">We received your message and will get back to you soon.</p>
            <div style="background-color: #fef8e8; padding: 16px; border-radius: 8px; margin: 24px 0;">
              <p style="color: #000; margin: 0;"><strong>Your Message:</strong></p>
              <p style="color: #555; margin: 8px 0;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <p style="color: #888; font-size: 12px;">Creative Studio Team</p>
          </div>
        `,
      }),
    });

    let resendData: { id?: string; message?: string; error?: string } = {};
    try {
      resendData = await resendResponse.json() as { id?: string; message?: string; error?: string };
    } catch (parseError) {
      console.error("Failed to parse Resend response:", parseError);
    }

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);

      // Check if it's a test mode limitation error
      const errorMessage = typeof resendData === 'object' && resendData.message ? resendData.message : '';
      if (errorMessage.includes('testing emails') || errorMessage.includes('verify a domain')) {
        // In test mode - still accept the form but log it
        console.log(`Contact form submission in test mode - Email: ${email}, Name: ${name}`);

        // Try to send to verified email instead
        const verifiedEmail = "pocox3happymishra@gmail.com";
        const fallbackResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "noreply@resend.dev",
            to: verifiedEmail,
            subject: `Contact Form Submission from ${name} (${email})`,
            html: `
              <div style="font-family: Arial, sans-serif;">
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 12px; border-radius: 4px;">${message}</p>
              </div>
            `,
          }),
        }).catch((error) => {
          console.error("Failed to send fallback email:", error);
          return null;
        });

        if (!fallbackResponse || !fallbackResponse.ok) {
          return res.status(500).json({
            success: false,
            message: "Email service is in test mode. Please verify a domain on Resend.com for production use.",
          } as ContactFormResponse);
        }

        return res.status(200).json({
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        } as ContactFormResponse);
      }

      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      } as ContactFormResponse);
    }

    // Also send notification to admin/site owner
    const adminEmail = process.env.ADMIN_EMAIL || "pocox3happymishra@gmail.com";
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "noreply@resend.dev",
        to: adminEmail,
        subject: `New contact form submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 12px; border-radius: 4px;">${message}</p>
          </div>
        `,
      }),
    }).catch((error) => {
      console.error("Failed to send admin notification:", error);
    });

    return res.status(200).json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    } as ContactFormResponse);
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    } as ContactFormResponse);
  }
};
