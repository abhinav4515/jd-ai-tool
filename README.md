# AI-Powered Job Description Generator & Optimizer

> An AI tool that generates and optimizes job descriptions with DEI scoring, readability analysis, and actionable rewrite suggestions — powered by LLaMA 3.3 70B via Groq.

---

## 🚀 Live Demo

**Frontend:** [https://jd-optimizer.vercel.app](https://jd-optimizer.vercel.app)
**Backend API:** [https://jd-ai-tool.onrender.com](https://jd-ai-tool.onrender.com)

---

## ⚡ Quick Start

No login or account creation required. Just open the link and start using it.

### Using the Live App

1. Open the frontend URL above in your browser
2. Fill in the form fields (see sample data below)
3. Click **Generate**
4. View your optimized JD + quality scores + rewrite suggestions in seconds

### Running Locally

**Prerequisites:** Node.js 18+, Python 3.11+

**1. Clone the repo**
```bash
git clone https://github.com/your-username/jd-ai-tool.git
cd jd-ai-tool
```

**2. Start the backend**
```bash
cd backend
pip install -r requirements.txt

# Create a .env file
echo "GROQ_API_KEY=your_groq_api_key_here" > .env

# Run the server
uvicorn main:app --reload --port 8000
```

**3. Start the frontend**
```bash
cd frontend
npm install
npm run dev
```

**4. Open** `http://localhost:3000` in your browser.

> **Get a free Groq API key:** [https://console.groq.com](https://console.groq.com) — free tier is sufficient to run the full app.

---

## 🧪 Sample Test Data

Copy and paste these into the form to see the tool in action.

### Test Case 1 — Generate from Scratch

| Field | Value |
|---|---|
| **Job Title** | Product Manager |
| **Department** | Product |
| **Seniority** | Mid-level (3–5 years) |
| **Requirements** | Experience with agile methodologies, strong analytical skills, ability to work cross-functionally with engineering and design, familiarity with product analytics tools like Mixpanel or Amplitude |
| **Existing JD** | *(leave blank)* |

---

### Test Case 2 — Optimize an Existing JD

| Field | Value |
|---|---|
| **Job Title** | Software Engineer |
| **Department** | Engineering |
| **Seniority** | Senior |
| **Requirements** | React, Node.js, system design, mentoring junior engineers |
| **Existing JD** | *(paste the text below)* |

```
We are looking for a rockstar senior engineer who can dominate our frontend stack.
You must be a coding ninja with 5+ years of React experience.
The ideal candidate is a self-starter who can hit the ground running.
Responsibilities include building killer features, crushing bugs, and owning the roadmap.
Must be able to work in a fast-paced, high-pressure environment.
```

> **What to expect:** The tool will flag masculine-coded language ("rockstar", "ninja", "dominate", "crushing"), suggest inclusive rewrites, score the JD across 4 dimensions, and return a fully optimized version.

---

### Test Case 3 — Entry-Level Role

| Field | Value |
|---|---|
| **Job Title** | Data Analyst |
| **Department** | Analytics |
| **Seniority** | Junior (0–2 years) |
| **Requirements** | SQL, Excel, basic Python, ability to create dashboards, good communication skills |
| **Existing JD** | *(leave blank)* |

---

## 📊 What the Output Includes

For every submission the tool returns:

1. **Optimized Job Description** — A fully rewritten, structured JD ready to post
2. **Quality Scores** — Rated across four dimensions:
   - **Inclusivity** — Flags gendered or exclusionary language
   - **Readability** — Assesses clarity, sentence structure, and tone
   - **Completeness** — Checks for missing sections (responsibilities, qualifications, benefits)
   - **SEO / Keyword Optimization** — Evaluates keyword density and job-board discoverability
3. **Rewrite Suggestions** — Specific phrases flagged with drop-in alternatives

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, TypeScript, TailwindCSS |
| Backend | Python 3.11, FastAPI |
| AI Model | LLaMA 3.3 70B Versatile via Groq API |
| Hosting | Vercel (frontend) + Render (backend) |

---

## 📁 Project Structure

```
jd-ai-tool/
├── frontend/
│   ├── app/
│   │   └── page.tsx        # Main UI — form + result display
│   ├── package.json
│   └── ...
├── backend/
│   ├── main.py             # FastAPI app — /generate endpoint
│   ├── requirements.txt
│   └── .env                # GROQ_API_KEY (not committed)
└── README.md
```

---

## 🔑 API Reference

### `POST /generate`

**Request body:**
```json
{
  "title": "Product Manager",
  "department": "Product",
  "seniority": "Mid-level",
  "requirements": "Agile, roadmap planning, cross-functional collaboration",
  "existing_jd": ""
}
```

**Response:**
```json
{
  "result": "## Optimized Job Description\n\n**Role:** Product Manager...\n\n## Quality Scores\n\nInclusivity: 8/10..."
}
```

---

*Built by Abhinav Jaiswal — APM Screening Assignment, Option B*
