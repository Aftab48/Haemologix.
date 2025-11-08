# LLM Reasoning System - Implementation

## Overview

The platform integrates advanced LLM reasoning using Claude Sonnet 4.5 (primary) and GPT-4o mini (fallback) via OpenRouter for intelligent decision-making across all agents.

## Architecture

### Core Components

1. **LLM Reasoning Module** (`lib/agents/llmReasoning.ts`)
   - Primary: Claude Sonnet 4.5
   - Fallback: GPT-4o mini (automatic on failure)
   - Functions: `reasonAboutDecision()`, `reasonAboutDonorSelection()`, `reasonAboutUrgency()`, etc.

2. **API Endpoint** (`app/api/agents/llm-reasoning/route.ts`)
   - Fetches agent decisions with LLM reasoning
   - Supports filtering by agent type, model, date range, request ID

3. **UI Components**
   - `LLMReasoningCard`: Displays reasoning with model badges and confidence scores
   - `LLMReasoningView`: Admin panel view with filtering and statistics

## Integration Points

### Agents Using LLM Reasoning

- **Coordinator Agent**: Donor selection with holistic factor analysis
- **Hospital Agent**: Urgency assessment based on stock levels and context
- **Inventory Agent**: Optimal source selection considering distance, expiry, quantity
- **Logistics Agent**: Transport method and route optimization
- **Verification Agent**: Eligibility edge case analysis

## Features

- **Automatic Fallback**: Seamless switch to GPT-4o mini if Claude fails
- **Model Tracking**: Each decision records which model was used
- **Confidence Scores**: LLM-provided confidence levels for decisions
- **Detailed Reasoning**: Step-by-step explanations for all decisions
- **Admin Visibility**: Dedicated tab in admin panel for reviewing all LLM reasoning

## Data Structure

Agent decisions store:
- `reasoning`: Detailed LLM explanation
- `model_used`: "claude-4.5", "gpt-4o-mini", or "fallback"
- `llm_used`: Boolean flag
- `llm_confidence`: Confidence score (0-1)

## Configuration

Requires `OPENROUTER_API_KEY` environment variable. Models configured in `lib/agents/llmReasoning.ts`.

