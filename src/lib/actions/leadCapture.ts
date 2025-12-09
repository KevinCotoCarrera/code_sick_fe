"use server";

import { cookies } from "next/headers";

export interface LeadData {
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  error?: string;
}

export async function submitLead(data: LeadData): Promise<LeadResponse> {
  try {
    // Basic validation
    if (!data.email || !data.email.includes("@")) {
      return {
        success: false,
        message: "Please provide a valid email address",
      };
    }

    // Here you would integrate with your backend API or database
    // For now, we'll simulate a successful submission

    // Example: Send to your API
    // const response = await fetch('https://your-api.com/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });

    console.log("Lead captured:", data);

    // Store in cookies for tracking (optional)
    const cookieStore = await cookies();
    cookieStore.set("lead_submitted", "true", {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return {
      success: true,
      message: "Thank you! We'll be in touch soon.",
    };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function checkLeadStatus(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    return cookieStore.has("lead_submitted");
  } catch {
    return false;
  }
}
