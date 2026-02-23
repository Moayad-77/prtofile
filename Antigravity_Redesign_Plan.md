# Antigravity Portfolio Redesign Plan (Backend & .NET Focus)

## 1. Visual Theme (The "Antigravity" Concept)
- **Aesthetic:** Deep, dark space aesthetic with a fluid UI. We will use a deep cosmic background (`#050510`) with glowing, luminous accents (neon cyan and violet).
- **Layout:** Breaking away from traditional box grids. Elements will use high border-radius, floating glassmorphism panels (`backdrop-filter`), and asymmetrical alignments.
- **Animations:** A gentle continuous "breathing" / vertical floating animation on hero text, images, and floating particles in the background to simulate zero-gravity.

## 2. Hero Section Refocus
- **Objective:** Highlight your specialization in **ASP.NET Core, C#, and Backend Engineering**.
- **Content Changes:**
  - Update the dynamic typing text to feature roles like: `"ASP.NET Core Developer"`, `"Backend Architect"`, `"Building Scalable APIs"`.
  - Add continuous floating animations to the hero title and call-to-action buttons.
  - The hero particle system will be maintained but tuned to look like "data streams" or "nodes" connecting in the backend.

## 3. Projects Gallery ("Floating Capsules")
- **Layout:** Project cards will be redesigned into sleek "Capsules" (pill-like or highly rounded glass panels) floating in the void.
- **Interaction:** A subtle, lightweight vanilla JavaScript 3D tilt effect will be applied so the capsules lightly rotate based on mouse movement.
- **Content:** The featured projects will prioritize your C# and Backend work. E.g., presenting an "E-Commerce API Architecture" or highlighting backend complexity over just frontend UI.

## 4. Skills & About Sections
- **Skills Reorder:** .NET, C#, Entity Framework, and SQL Server will take center stage as the largest orbiting planets. Secondary skills (Python, PHP, React) will orbit around them.
- **About:** Adjust the narrative to focus on your deep interest in software architecture, scalable data systems, and system performance.

## 5. Technical Implementation
- **HTML:** Semantic, lightweight tags.
- **CSS:** Standard CSS variables for colors. Keyframes for `float` and `pulse` animations. Flexbox/Grid for fluid, floating layouts.
- **JavaScript:** Minimal vanilla JS for the scroll reveal, the 3D tilt effect (`Mousemove` event calculating perspective), and the canvas starfield.

---
*Awaiting your approval to begin executing these HTML, CSS, and JS refactors.*
