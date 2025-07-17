<img width="2955" height="1509" alt="image" src="https://github.com/user-attachments/assets/f1ae2931-459d-4748-bbb1-10ee31d82593" />

# Uzence Brands 🏢

**3300+ brand logos as React components**  
Lightweight, customizable, and easy to use.

## Install
```bash
npm install @anirudhVASUDEV23/uzence-brands

Usage
import { Brand } from "@anirudhVASUDEV23/uzence-brands/dist/logo.js";

<Brand 
  name="google"  // Brand identifier
  s={64}         // Size in px
  color="#4285F4" // Optional color
/>


Features
3300+ popular brand logos

Dynamic color theming

Pure SVG components

Tree-shakeable imports

Props
Prop	Type	Default	Description
name	string	-	Brand key (e.g. "apple")
s	number	24	Size in pixels
color	string	Brand	Custom fill color
Examples
jsx
// Standard logo
<Brand name="twitter" s={32} />

// Random colored variant
<Brand 
  name="netflix"
  s={48}
  color={`hsl(${Math.random() * 360}, 70%, 70%)`}
/>
Includes
All major brands:
🔹 Tech (Google, Apple, Microsoft)
🔹 Social (Facebook, Instagram, TikTok)
🔹 Finance (Visa, PayPal, Stripe)
🔹 Automotive (Tesla, BMW, Ford)
🔹 And 3200+ more!



