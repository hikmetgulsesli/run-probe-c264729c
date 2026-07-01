---
name: Run Probe
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#6f4500'
  on-tertiary: '#ffffff'
  tertiary-container: '#905a00'
  on-tertiary-container: '#ffdfbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is engineered for precision and reliability. It adopts a **Minimalist-Professional** style, stripping away decorative clutter to prioritize system status and data clarity. The aesthetic is clinical and utilitarian, evoking the feeling of a high-performance instrument panel. 

The interface relies on generous whitespace to reduce cognitive load while maintaining a compact data density. Visual hierarchy is established through meticulous typography and subtle structural borders rather than heavy colors or shadows. The result is a calm, authoritative environment that feels stable and responsive.

## Colors
The palette is rooted in a neutral foundation of cool grays and whites to ensure that semantic signals remain the focal point.

- **Primary (Professional Blue):** Used strictly for interactive focal points, primary actions, and active probe indicators.
- **Success (Green):** Represents 'Ready' or 'Healthy' states. It is high-contrast against the light background for immediate recognition.
- **Warning/Inactive (Amber):** Used for 'Paused' states or non-critical maintenance modes. 
- **Neutral/Surface:** A layered system of slate grays is used for text, secondary icons, and structural borders. Backgrounds use a subtle off-white to reduce screen glare during long monitoring sessions.

## Typography
This design system utilizes **Geist** for its exceptional legibility and technical character. The type scale is intentionally tight to support data-dense dashboards.

- **Headlines:** Set with slight negative letter-spacing to feel "locked-in" and sturdy.
- **Body:** The 14px size is the workhorse for probe descriptions and status logs.
- **Labels:** Uppercase labels are used for metadata categories (e.g., "LAST PROBE", "REGION") to differentiate from live data.
- **Monospace:** Used specifically for timestamps, IP addresses, and log snippets to ensure vertical alignment of numerical data.

## Layout & Spacing
The layout follows a strict 4px grid system. The core philosophy is **Compact Utility**, where elements are grouped closely to show as much information as possible without overcrowding.

- **Grid:** A 12-column fluid grid for desktop dashboards, collapsing to a single column for mobile.
- **Margins:** Standard 24px page margins on desktop, reducing to 16px on mobile.
- **Density:** Components use a "compact" vertical rhythm (8px or 12px internal padding) to maximize the number of visible probes on a single screen.

## Elevation & Depth
Depth is handled with extreme restraint to maintain a flat, professional profile.

- **Subtle Borders:** Primary method of separation. A 1px solid border in `#E2E8F0` defines cards and input fields.
- **Surface Layers:** The main background is slightly tinted, while active "cards" or containers are pure white to "pop" forward.
- **Soft Shadows:** Only used on floating elements like dropdowns or active state cards. Shadows should be highly diffused: `0 4px 12px rgba(0, 0, 0, 0.05)`.
- **Zero-Elevation:** Buttons and secondary inputs are flat, using background color shifts rather than shadows to indicate interactivity.

## Shapes
The design system uses a **Soft (0.25rem)** roundedness. This provides a modern, approachable feel while remaining structured and professional. 

- **Standard Elements:** 4px radius for buttons, inputs, and small cards.
- **Containers:** 8px radius for larger dashboard sections.
- **Indicators:** Status "pills" or dots use a full circle/pill radius to distinguish them from interactive buttons.

## Components
- **Compact Cards:** White background with a 1px border. Use a vertical layout for mobile and a horizontal "list-item" style for desktop to show status, name, and latency in a single line.
- **Toggle Switches:** Small-scale (16px height) with a gray track that turns Primary Blue when active. No icons inside the toggle.
- **Status Chips:** Small, low-contrast background with high-contrast text. Example: A light green background with dark green text for "Ready".
- **Timestamps:** Rendered in `mono-sm` font. Displayed in relative time (e.g., "2m ago") with a hover state showing the full ISO string.
- **Input Fields:** Minimalist style with a 1px border. On focus, the border transitions to Primary Blue with a 2px outer "glow" (0.15 opacity).
- **Primary Buttons:** Solid Primary Blue with white text. No gradients. Secondary buttons use a light gray ghost style.