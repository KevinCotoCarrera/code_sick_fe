"use server";

// Simple email sanitizer
function sanitizeEmail(email: string): string {
  // Remove unwanted characters and trim
  return email
    .replace(/[^\w@.\-+]/g, "")
    .trim()
    .toLowerCase();
}

export async function saveEmail(formData: FormData) {
  let email = formData.get("email")?.toString().trim();
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email");
  }
  email = sanitizeEmail(email);
  if (!/^[\w.\-+]+@[\w.\-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new Error("Invalid email format");
  }
  
  // TODO: Add your database integration here
  // Example: await db`INSERT INTO waitlist (email) VALUES (${email}) ON CONFLICT (email) DO NOTHING`;
  
  console.log("Email saved:", email);
  return { success: true, email };
}
