# Landing Translation Brief (for AI generation)

Use this Markdown as the single source of truth to generate **all locale JSON files**. Keep phrasing concise and business-specific. Delete example values and fill with your own.

## 1. Brand & Product Snapshot

- **Brand name:** `CodeSick`
- **One-liner (what we do):** `AI-powered analytics to capture leads and surface insights`
- **Audience / segment:** `B2B SaaS teams, marketing leads`
- **Tone:** `confident, friendly, modern`

## 2. Navigation Labels

- Features | Pricing | About | Why Us? | Log in | Lock Discount

## 3. Hero Section

- **Badge:** `Transform Your Sales`
- **Headline:** `Drive Results with AI-Powered Insights`
- **Subheadline:** `Leverage cutting-edge technology to capture leads, analyze feedback, and accelerate growth.`
- **Primary CTA:** `Get Started Free`
- **Secondary CTA:** `Learn More`

## 4. Feature Trio

Provide 3 cards (icon is emoji or short label; AI maps to existing icons).

1. Title: `AI-Powered Analytics`
   Description: `Get deep insights from customer feedback with advanced sentiment analysis.`
2. Title: `Real-Time Tracking`
   Description: `Monitor performance metrics and engagement in real time.`
3. Title: `Seamless Integration`
   Description: `Easy setup with QR codes and instant deployment across locations.`

## 5. Showcase Microcopy

- Section title: `Experience the Future`
- Section blurb: `Interact with cutting-edge 3D visualizations and see how we bring data to life.`
- Bullets: `Interactive dashboards`, `3D data visualization`, `Immersive analytics`

## 6. Stats (numbers can be strings)

- Active Users: `10K+`
- Satisfaction: `98%`
- Insights Generated: `50M+`

## 7. Product Block

- Title: `Built for Scale`
- Description: `From startups to enterprises, our platform grows with your business.`
- Feature chips: `Enterprise-grade security`, `99.9% uptime guarantee`, `24/7 customer support`, `Custom integrations`

## 8. Lead Form

- Title: `Ready to Get Started?`
- Subtitle: `Join thousands of businesses already using our platform.`
- Form title: `Start Your Free Trial`
- Form description: `No credit card required. Get started in minutes.`
- Field labels: Name | Email | Company | Phone | Message
- Field placeholders: `John Doe` | `john@company.com` | `Your Company` | `+1 (555) 000-0000` | `Tell us about your needs...`
- Buttons: Submit `Join Waitlist`, Submitting `Submitting...`
- Messages: Success `Thank you! We'll be in touch soon.` | Error `Something went wrong. Please try again.`

## 9. CTA Footer

- Title: `Transform Your Business Today`
- Subtitle: `Join the next generation of data-driven businesses.`
- Button: `Get Started Now →`

## 10. Footer & Locale Switcher

- Tagline: `AI-powered business solutions`
- Contact: Phone label `Phone`, number `+66 63 645 5571`; Email label `Email`, address `contact@codesick.com`
- Footer links: Features | Pricing | Why Us?
- Locale labels: English | Español | Français | 日本語 | 한국어 | ไทย | Português | Italiano | 中文

## Guidance for AI mapping

- Keys come from `messages/<locale>.json` under namespaces: `landing`, `nav`, `footer`, `LocaleSwitcher`, `auth`, `date`, `settings` (profile/account only if used).
- If a locale is missing, clone the English structure and replace values per this brief.
- Preserve placeholders `{year}` and variable braces (e.g., `{weeks}`) exactly.
- Keep CTAs short; avoid line breaks unless intentional.
- If a language needs different spacing or formality, adapt wording but keep meaning.

## How to use

1. Copy this file, update values for the business.
2. Run your AI step to emit full locale JSONs matching the existing key structure.
3. Drop outputs into `messages/<locale>.json` (UTF-8, no comments).

## Notes

- This brief is authoritative; UI pulls directly from JSON.
- If new sections are added, extend this template and the JSON schema in code.
