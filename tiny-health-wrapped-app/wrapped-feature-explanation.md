Original prompt for this file:

I am going to create a live web application for tiny health wrapped for them to see exactly what it would look like, as well as what I am capable as a one-man-army product/dev/design powerhouse. What I need from you: Create a markdown file that I can pass over to my coding AI assistant to get the context of what the web app should look like. Here's some more guidance on what I want from it:

The idea is I want to, on some level, rebuild what TinyHealth has. So I'm going to give my AI coding agent, which is going to be Cursor, I'm going to give Cursor a few screenshots of what the frontend UI looks like. I don't need the frontend UI of TinyHealth's site to really do anything. Like, just build the frontend and don't make that part of it functional. But there should be some part where it announces to the user that their results are available. And then the user clicks on that, and they get kind of a mobile-first wrapped experience. I'm also going to include screenshots of what Spotify's wrapped experience looks like, and I want it to mimic that heavily in terms of UI and UX. But I also want it to use TinyHealth's branding, so use their colors, use fonts similar to theirs, make it look like it's actually believable, and it could be dropped straight into TinyHealth, no problem. And the main functionality with wrapped is it's kind of like an Instagram story. So they tap through the different insights, and it provides them fun insights. We can say that we probably use AI to generate some of them, so maybe it creates an archetype for them the same way Spotify does, and it does it in a fun way. For example, sometimes Spotify, it'll be like, your listener alias, or your listener, you as a listener, identify with the following archetype. Or they say it some way that makes sense to a user, but it's like vampire, indie, sleaze, hyper guy, or something. And so I want it to do something like that. I want it to display where the user stands as far as their percentile across a normal person, or the average person, or a median person, or maybe also across how they stack up against the other users at TinyHealth. And yeah, just a number of different interesting insights, and make it super digestible. Throw in some information, like if they're high in one area, give a quick three-sentence blurb about that. One thing also is this should naturally hook into them getting tested again, so we should be including things that mention like, don't let your story end here, test again in six months, and we'll tell you how your gut health has changed, or improved, or whatever. Another important thing is even in desktop, I want this to show up in mobile resolution, because I think that will be important as far as getting them to share on mobile. And then also really important, there should be tools in the workflow that make it really easy to share, like download the photo of the slide. There should be certain slides where there's like a CTA button that says share with your friends, and when they click that it downloads the photo or something. And yeah, and those are just like the basics, so maybe there's other things, but yeah, that's the main idea for it.

# Tiny Health Wrapped — Web App Specification

## 🔥 Project Summary
A mobile-first, web-based mock of a "Your Gut Health: Wrapped" feature, inspired by Spotify Wrapped. This is designed to:
- Demonstrate what the wrapped experience could look like inside Tiny Health.
- Showcase full-stack product capabilities: design, dev, product thinking.
- Use believable branding (colors, typography, layout) that matches Tiny Health's aesthetic.
- Focus heavily on **UI polish**, **storytelling**, and **shareability**.

## 🧠 Core Experience
### 1. **Landing UI (Tiny Health Mock Site)**
- Rebuild basic front-end of TinyHealth.com based on screenshots.
- Include a section that mimics a logged-in user state:
  - A card or hero that says something like: "🎁 Your Gut Health Wrapped is ready!"
  - CTA Button: `View My Wrapped` → launches mobile-first Wrapped experience.

---

### 2. **Wrapped Experience (Main Feature)**
- Mimics Instagram Stories or Spotify Wrapped:
  - Tap to move forward.
  - Optional: swipe back to go to previous insight.
  - Use **Tiny Health brand colors** (based on screenshots and extracted HEX values).
  - Typography should match or approximate their existing brand fonts.

#### Mobile-first
- Even when viewed on desktop, the app should simulate a **mobile device viewport**.

---

### 3. **Wrapped Insight Cards (Examples)**
Each card should be its own slide, with bold visual presentation:

#### 🎭 Archetype Slide
- Generate a fun, shareable user archetype:
  - E.g. "Your Gut Type: The Fermented Femme Fatale" or "The Symbiotic Stoic."
  - Style it similarly to Spotify's listener archetypes.
  - Include brief blurb: *"You've got high diversity, low inflammation, and a rare strain that sets you apart. You're the rare kombucha in a fridge full of colas."*

#### 📊 Percentile Slide
- Show how user compares to other users or general population:
  - "You're in the 86th percentile for microbiome diversity."
  - Visual: bar chart or dial UI.

#### 🧬 Key Insight Slide
- Highlight an interesting finding:
  - "You're high in Akkermansia! This strain is linked to better glucose control."
  - Include 1–3 sentences max.

#### 🔁 Re-testing Hook Slide
- Call-to-action to retest:
  - "Your gut health is always evolving. Come back in 6 months and we'll show you the progress."
  - Button: `Remind Me Later` or `Schedule Re-Test`

#### 📤 Share Slide
- CTA to share a slide with friends:
  - Button: `📸 Download Slide`
  - Optional: Automatically formats download as a sharable PNG with layout that looks good on Instagram stories.

---

## 🎯 Features to Implement
- ✅ Tap-to-advance slide flow
- ✅ Styled slides/cards for each Wrapped moment
- ✅ CTA buttons where appropriate (Download, Share, Retest, etc.)
- ✅ Mobile-first layout (fixed height/width viewport on desktop)
- ✅ Color palette + typography matches Tiny Health brand
- ✅ Optionally use placeholder images/screenshots for real data

---

## 📱 Tech Notes
- App can be statically deployed (Netlify, Vercel, etc.)
- All data can be hardcoded JSON — no need for real backend
- Focus on:
  - UI polish
  - Storytelling
  - Shareability

---

## 🗂 Assets To Provide
- Screenshots of TinyHealth.com for frontend skinning
- Screenshots of Spotify Wrapped cards for reference
- HEX color codes (already extracted)
- Tiny Health-style fonts (or closest available matches)

---

## ✨ Stretch Goals (Optional)
- Simulate different archetypes by randomizing values
- Add subtle animations or transitions between slides
- Allow user to input a name and see it reflected on slides

---

## 🔚 Final Thought
This is not just a demo — it's a way to **visually and interactively sell the product vision**, demonstrate strong PM instincts, and show engineering/design execution. It should feel like something Tiny Health could ship *tomorrow*.

Make it beautiful. Make it snappy. Make it shareable.


Build it using react, and make it responsive for mobile.
