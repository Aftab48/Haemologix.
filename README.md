# Haemologix - AI-Powered Blood Donation Platform

A Next.js application for managing blood donation alerts, donor matching, and hospital coordination with intelligent AI agents.

## Features

### 🤖 Agentic AI System
- **6 Autonomous Agents**: Hospital, Donor, Coordinator, Inventory, Logistics, and Verification agents
- **LLM-Powered Reasoning**: Claude Sonnet 4.5 with GPT-4o mini fallback via OpenRouter
- **Real-time Decision Making**: AI agents make intelligent decisions about donor matching, inventory selection, and transport planning
- **Detailed Reasoning Display**: View comprehensive LLM reasoning in admin panel and alert details

### 🏥 Core Functionality
- Hospital alert creation and management
- Donor registration and response system
- Intelligent donor matching with multi-factor scoring
- Inventory management across hospitals
- Transport planning and logistics coordination
- Real-time workflow tracking

### 📊 Admin Dashboard
- User management (donors & hospitals)
- Agentic AI Dashboard with live agent activity
- LLM Reasoning viewer with filtering and search
- AI Agent Logs
- System analytics

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- OpenRouter API key (for LLM reasoning)

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

**Required:**
- `DATABASE_URL` - PostgreSQL connection string
- `OPENROUTER_API_KEY` - For LLM reasoning (Claude Sonnet 4.5, GPT-4o mini)
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER` - For SMS
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - For emails
- `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_S3_BUCKET_NAME` - For file uploads
- `NEXT_PUBLIC_APP_URL` - Application base URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` - Clerk authentication

**Optional:**
- `GEMINI_API_KEY` - PDF extraction
- `HF_API_KEY` - Document processing
- `OPENCAGE_API_KEY` - Geocoding fallback
- `NEXT_PUBLIC_ADMIN_PASSKEY` - Admin panel access

See `env.example` for complete list of all environment variables.

### Installation
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## LLM Reasoning System

The platform uses advanced LLM reasoning for critical decisions:

- **Primary Model**: Claude Sonnet 4.5 (via OpenRouter)
- **Fallback Model**: GPT-4o mini (automatic fallback on failure)
- **Use Cases**: Donor selection, urgency assessment, inventory selection, transport planning, eligibility analysis

View detailed reasoning in:
- Admin Panel → LLM Reasoning tab
- Alert Details page → Agent Actions Timeline

## Documentation

See `Documentations/` folder for:
- Agent implementations and build summaries
- Agent value propositions
- Real-life scenarios and workflows

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **AI/LLM**: OpenRouter (Claude Sonnet 4.5, GPT-4o mini)
- **UI**: Tailwind CSS, shadcn/ui components
- **Authentication**: Clerk

## Deploy

Deploy on Vercel or any Next.js-compatible platform. Ensure environment variables are configured.
