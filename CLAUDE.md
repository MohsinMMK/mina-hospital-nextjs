# MINA Hospital Website - Project Documentation

## Overview
A modern, full-featured hospital website for MINA Super & Multi Speciality Hospitals with patient portal, appointment booking, doctor directory, and admin panel. Built for accessibility, SEO optimization, and mobile-first design.

## Development Guidelines

1. **Think first, then act** - Read relevant files before making changes
2. **Check in before major changes** - Verify plans before implementing
3. **Accessibility first** - Healthcare sites MUST be WCAG 2.1 AA compliant
4. **Security conscious** - Handle patient data with care, validate all inputs
5. **Mobile-first** - Many users access on mobile devices
6. **Keep it simple** - Minimal changes, maximum impact

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16+ (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| File Storage | Supabase Storage |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Package Manager | Bun |

## Project Structure

```
src/
├── app/
│   ├── (public)/              # Public pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── doctors/
│   │   ├── contact/
│   │   ├── emergency/
│   │   └── locations/
│   ├── (auth)/                # Auth pages
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── (portal)/              # Patient Portal (protected)
│   │   ├── dashboard/
│   │   ├── appointments/
│   │   ├── medical-records/
│   │   ├── billing/
│   │   ├── messages/
│   │   ├── profile/
│   │   └── layout.tsx
│   ├── (admin)/               # Admin Panel (protected)
│   │   ├── admin/
│   │   └── layout.tsx
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Header, Footer
│   ├── sections/              # Homepage sections
│   └── shared/
├── lib/
│   ├── supabase/              # Supabase clients
│   │   ├── client.ts          # Browser client
│   │   ├── server.ts          # Server client
│   │   └── admin.ts           # Admin client
│   └── utils.ts               # cn() helper
├── config/
│   └── site.ts                # Site configuration
├── hooks/
├── types/
└── middleware.ts              # Auth middleware
```

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server (port 3366)
bun build            # Build for production
bun start            # Start production server
bun lint             # Run ESLint
```

## Routes

### Public Pages
| Path | Description |
|------|-------------|
| `/` | Homepage with hero, services, doctors, testimonials |
| `/about` | Hospital history, mission, values |
| `/services` | All medical services/departments |
| `/doctors` | Doctor directory with filters |
| `/contact` | Contact form and info |
| `/emergency` | Emergency info, 24/7 contacts |

### Patient Portal (Authenticated)
| Path | Description |
|------|-------------|
| `/dashboard` | Patient dashboard |
| `/appointments` | View/manage appointments |
| `/medical-records` | Medical records |
| `/billing` | Bills and payments |
| `/messages` | Secure messaging |
| `/profile` | Profile settings |

### Admin Panel
| Path | Description |
|------|-------------|
| `/admin` | Admin dashboard |
| `/admin/doctors` | Manage doctors |
| `/admin/appointments` | Manage appointments |
| `/admin/patients` | Patient management |
| `/admin/blog` | CMS for blog |

## Environment Variables

```env
# App
NEXT_PUBLIC_SITE_URL=http://localhost:3366

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Maps (optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=

# Email (optional)
RESEND_API_KEY=
```

## Database Schema (Supabase)

### Core Tables
```sql
-- Departments
departments (id, name, slug, description, icon, image_url, is_active)

-- Doctors
doctors (id, name, slug, department_id, qualification, experience_years,
         bio, image_url, rating, is_active, is_featured)

-- Locations
locations (id, name, slug, address, city, state, pincode, phone,
           lat, lng, google_maps_url, is_active)

-- Patients (extends auth.users)
patients (id, user_id, full_name, phone, email, date_of_birth,
          gender, address, emergency_contact)

-- Appointments
appointments (id, patient_id, doctor_id, location_id, department_id,
              appointment_date, appointment_time, type, status, notes)

-- Medical Records
medical_records (id, patient_id, doctor_id, appointment_id,
                 record_type, title, diagnosis, prescription, file_urls)

-- Messages
messages (id, sender_id, receiver_id, subject, content, is_read)

-- Blog Posts
blog_posts (id, title, slug, content, excerpt, image_url,
            author_id, category, status, published_at)

-- Contact Submissions
contact_submissions (id, name, email, phone, subject, message)

-- Admin Users
admin_users (id, user_id, role, permissions)
```

## Brand Colors

```css
:root {
  --primary: #003366;        /* Deep Blue */
  --primary-dark: #002244;
  --primary-light: #E6F0F8;
  --secondary: #C78A3B;      /* Gold */
  --secondary-light: #F5E6D3;
  --emergency: #DC2626;      /* Red */
}
```

## Fonts
- **Display:** Playfair Display (headings)
- **Body:** Plus Jakarta Sans (text)

## Code Conventions

1. **Imports:** Use `@/` alias for src/ imports
2. **Components:** Functional components with TypeScript interfaces
3. **Styling:** Tailwind classes, use `cn()` for conditionals
4. **Forms:** React Hook Form + Zod validation
5. **Data Fetching:** Server Components where possible
6. **File Naming:** kebab-case for files, PascalCase for components

## Accessibility Requirements (WCAG 2.1 AA)

- Keyboard navigation for all interactive elements
- Skip to main content link
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for icons and buttons
- Color contrast ratio 4.5:1 minimum
- Focus indicators visible
- Form labels and error messages

## Security Considerations

- Input validation on all forms (Zod)
- XSS prevention (sanitize HTML)
- Supabase RLS policies for data access
- Secure password requirements
- Session timeout for portal
- HTTPS only

## SEO

- Semantic HTML structure
- Meta titles and descriptions for all pages
- Open Graph and Twitter cards
- JSON-LD structured data (Hospital, Physician, MedicalWebPage)
- XML sitemap
- robots.txt
- Image optimization (next/image)

## Key Integrations

| Integration | Purpose |
|-------------|---------|
| Supabase Auth | Patient/admin authentication |
| Supabase DB | All data storage |
| Supabase Storage | Medical records, images |
| Google Maps | Location maps, directions |
| Resend | Transactional emails |

## Hospital Info

- **Name:** MINA Super & Multi Speciality Hospitals
- **Phone:** 040 2353 1881
- **Emergency:** 040 2353 1882
- **Email:** info@mina-hospitals.com
- **Locations:** Mehdipatnam & Attapur, Hyderabad

## Performance Targets

- Lighthouse Score: 90+ all categories
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
