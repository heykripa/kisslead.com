
# Kisslead Digital Marketing Agency

A premium, responsive website template tailored for digital marketing agencies, creative studios, and consultancy firms. Built with modern web technologies to ensure performance, scalability, and ease of customization.

## Key Features

- **Sophisticated Design**: Features a clean, grid-based layout with refined typography (Roboto Slab & Michroma).
- **Comprehensive Sections**:
  - **Hero**: Impactful landing area with background masking effects.
  - **Services**: Detailed grid layout for service offerings.
  - **Portfolio**: Showcase for recent work and case studies.
  - **Social Proof**: Statistics section and client logo strip.
  - **Resources**: Articles and blog previews.
- **Dynamic Legal Pages**: A structured system for handling policy pages (Privacy, Terms, Refunds) via `lib/policies.ts` and dynamic routing.
- **Responsive Navigation**: Mobile-friendly navbar with dropdown menus.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Typography**: Google Fonts (Roboto Slab, Michroma)

## Project Structure

- `components/`: Contains all functional React components.
  - `ui/`: Reusable primitives like Buttons and Badges.
- `lib/`: Utility functions and static data configurations (e.g., policy text).
- `public/`: Static assets including logos and images.
- `App.tsx`: Main application routing and layout structure.

## Customization Guide

### Changing the Logo
The website uses an SVG logo located at `/public/kisslead-logo.svg`. Replace this file to update the branding across the header and footer.

### Updating Content
- **Legal Pages**: Modify `lib/policies.ts` to update the text for Terms, Privacy, and other policies without touching the UI code.
- **Navigation**: Update the `navigation` array in `components/Navbar.tsx` to change menu items.
- **Services & Stats**: Data for these sections is contained locally within their respective components (`ServicesGrid.tsx`, `StatsSection.tsx`) for easy editing.

### Styles
Global styles and Tailwind directives are defined in `app/globals.css`. Font families are loaded via the `<head>` in `index.html`.

## License

This project is available for personal and commercial use.
