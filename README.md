# Shilp Setu

> An AI-powered digital catalog platform connecting rural artisans across India with institutional buyers.

## The Problem

Millions of skilled artisans across rural India — weavers, woodcarvers, potters, embroiderers — produce high-quality handmade products but remain invisible to institutional buyers. They depend on seasonal exhibitions, local middlemen, and word of mouth. Buyers on the other side have no reliable way to discover, evaluate, or order authentic craft products at scale.

## What Shilp Setu Does

Shilp Setu acts as a digital bridge. An NGO coordinator or craft alliance admin uploads a product photo and basic details. Gemini Vision AI automatically generates a professional product description in English (with Hindi translation). Buyers browse a filterable catalog and submit bulk inquiries directly — no brokers, no commission, no exhibitions.

## Core Features

- **AI Description Generator** — Upload a photo, get a publish-ready product description powered by Gemini 1.5 Flash
- **Multilingual Output** — English + Hindi descriptions for wider reach
- **Buyer Catalog** — Filterable by craft type, material, region, and price range  
- **Inquiry Pipeline** — Buyers submit bulk inquiry forms; admin tracks leads (New → Contacted → Confirmed)
- **Admin Dashboard** — Manage listings, availability, and incoming buyer interest in one place

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Image Hosting | Cloudinary |
| AI | Gemini 1.5 Flash API |
| Auth | JWT |
| Deployment | Vercel (frontend) + Render (backend) |

## Project Structure
```
shilp-setu/
├── frontend/          # React + Vite client
│   └── src/
│       └── App.jsx
├── backend/           # Node.js + Express server
│   └── index.js
├── .gitignore
└── README.md
```