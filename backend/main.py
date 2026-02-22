from fastapi import FastAPI
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from groq import Groq
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

client = Groq(api_key=api_key)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class JDRequest(BaseModel):
    title: str
    department: str
    seniority: str
    requirements: str
    existing_jd: str | None = None


@app.get("/")
def home():
    return {"message": "JD AI Tool Running"}


@app.post("/generate")
def generate_jd(data: JDRequest):

    try:

        prompt = f"""
You are an expert HR recruiter and DEI specialist.

Generate or optimize a job description based on:

Title: {data.title}
Department: {data.department}
Seniority: {data.seniority}
Requirements: {data.requirements}

Existing JD:
{data.existing_jd}

Return:

1. Optimized Job Description
2. Scores (Inclusivity, Readability, Completeness, SEO)
3. Suggestions with rewrites
"""

        chat_completion = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="llama-3.3-70b-versatile",
        )

        return {
            "result": chat_completion.choices[0].message.content
        }

    except Exception as e:
        return {"error": str(e)}