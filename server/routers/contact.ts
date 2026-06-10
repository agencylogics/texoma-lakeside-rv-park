import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { ENV } from "../_core/env";
import { notifyOwner } from "../_core/notification";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Valid email is required"),
  phone: z.string().max(20).optional().default(""),
  message: z.string().max(2000).optional().default(""),
});

async function sendToZapier(data: z.infer<typeof contactFormSchema>): Promise<boolean> {
  const webhookUrl = ENV.zapierWebhookUrl;
  if (!webhookUrl) {
    console.warn("[Contact] Zapier webhook URL is not configured");
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        submittedAt: new Date().toISOString(),
        source: "Texoma Lakeside RV Park Website",
      }),
    });

    if (!response.ok) {
      console.warn(`[Contact] Zapier webhook failed: ${response.status} ${response.statusText}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[Contact] Error sending to Zapier:", error);
    return false;
  }
}

export const contactRouter = router({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      // Send to Zapier webhook for SMS and email notifications
      const zapierSuccess = await sendToZapier(input);

      // Also notify the project owner via Manus notification
      const ownerNotified = await notifyOwner({
        title: `New Contact Form: ${input.firstName} ${input.lastName}`,
        content: [
          `Name: ${input.firstName} ${input.lastName}`,
          `Email: ${input.email}`,
          input.phone ? `Phone: ${input.phone}` : null,
          input.message ? `Message: ${input.message}` : null,
          `Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}`,
        ]
          .filter(Boolean)
          .join("\n"),
      }).catch(() => false);

      if (!zapierSuccess) {
        console.warn("[Contact] Zapier notification failed but form was received");
      }

      return {
        success: true,
        message: "Thank you! We'll be in touch soon.",
      };
    }),
});
