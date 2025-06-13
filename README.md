# AeroStream — Intelligent Disease Detection via Breath Analysis

AeroStream is an AI-driven, cloud-based platform that enables early-stage disease detection through **breath analysis**, empowering rural and urban healthcare systems alike. Built using **Next.js**, **Azure**, and **Supabase**, the platform uses **LLMs for inference**, **Twilio for OTP verification**, and supports both patients and doctors through a mobile-friendly interface.

---

## Features

- **Breath-Based Disease Prediction** using signal data and AI prompt engineering
- **Secure Auth with Supabase** and **SMS OTP with Twilio**
- **Mobile-First Frontend** built with Next.js and Shadcn for rapid access
- **Azure Cloud-Hosted Backend** for inference and data sync
- **Doctor Dashboard** for tracking patient diagnostics
- **Admin Panel** for managing trends, usage, and rural deployment

---

## Motivation

> AeroStream is designed to bring **preventive health diagnostics** to underserved regions through low-cost, LLM-powered tools that operate on breath-based bio-signals. Breath contains detectable biomarkers for diseases such as **COVID-19, diabetes, lung disease, and even cancer**.

---

## Status

| Feature               | Description                                           | Status         |
| --------------------- | ----------------------------------------------------- | -------------- |
| Londing Page          | landing page, packages, getting started               | ✅ Done        |
| Login Page            | User authentication UI                                | ✅ Done        |
| Singup Page           | User registration                                     | ✅ Done        |
| OTP Verification      | User verification on phone number                     | ✅ Done        |
| User Dashboard        | Displays user data                                    | 🔧 In Progress |
| Doctor Dashboard      | User authentication UI                                | 🔧 In Progress |
| Disease Notifications | Alert User of detected Disease, send report to doctor | ❌ Not Started |

---

# Architecture

![Architecture](public/AeroStream_Arch.png)

# Landing Page

![Landing Page](public/AeroStream.jpeg)

```md
![Twilio OTP](public/Twilio_OTP.jpeg)
```

## Tech Stack

| Layer      | Tools                                      |
| ---------- | ------------------------------------------ |
| Frontend   | Next.js, Shadcn, Tailwind, TypeScript      |
| Backend    | Azure Functions, Blob, Supabase (Auth, DB) |
| Auth & OTP | Supabase + Twilio SMS                      |
| Auth & OTP | Supabase + Twilio SMS                      |

---

## Getting Started

```md
git clone https://github.com/rahulyyadav/AeroStream.git
cd aerostream
```

### Install frontend

```md
cd frontend && npm install
```

### Environment setup

```md
cp .env.example .env.local
```

> Add Supabase + Twilio keys here

### Start frontend

```md
npm run dev
```
