# Product Requirements Document

## Project

AI Resume Reviewer

---

## Goal

Build an AI-powered web application that reviews resumes and provides actionable feedback, similar to what a recruiter would give.

---

## Target Audience

- Students
- Freshers
- Software Engineers
- Job Seekers

---

## Problem

Most people don't know why their resumes are rejected.

Existing resume checkers are either:
- Too generic
- Too expensive
- Not AI-powered

---

## Solution

Upload a resume.

Receive:

- Overall score (0–100)
- Strengths
- Weaknesses
- Missing keywords
- ATS friendliness
- Suggestions for improvement

---

## MVP Features

- Upload PDF
- Extract text
- Send text to LLM
- Receive structured JSON response
- Display results

---

## Out of Scope

- Authentication
- Payments
- Database
- User accounts
- Resume templates
- Cover letter generation

---

## Success Criteria

The user uploads a resume and receives useful feedback in under 15 seconds.

---

## Tech Stack

Backend:
- FastAPI
- uv

Frontend:
- Next.js
- Tailwind CSS

AI:
- OpenAI/Gemini/OpenRouter (TBD)

Deployment:
- TBD