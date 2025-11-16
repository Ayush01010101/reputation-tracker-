import { Request, Response } from "express";
import db from '../Database/db.ts'
import { brands, brandKeywords, mentions } from "../Database/schema";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { eq } from "drizzle-orm";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const ScrapeBrandDataFromGemini = async (req: any, res: Response) => {
  try {
    const brandId = Number(req.params.brandId);
    const userId = req.auth.userId;

    // Fetch Brand Info
    const brand = await db.select().from(brands).where(eq(brands.id, brandId));
    if (!brand.length) {
      return res.status(404).json({ error: "Brand not found" });
    }

    if (brand[0].userId !== userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Fetch Keywords
    const kw = await db
      .select()
      .from(brandKeywords)
      .where(eq(brandKeywords.brandId, brandId));

    const keywords = kw.map((k) => k.keyword).join(", ");

    // Gemini Prompt
    const prompt = `
You are a brand reputation monitoring AI.

Based on the following brand keywords:
${keywords}

1) Generate 15 realistic recent mentions from social media, news, reddit, forums.
2) For each mention return:
   - platform
   - content
   - sentiment_label (positive/neutral/negative)
   - sentiment_score (1-100)
   - topic (Delivery / Service / Refund / Price / Quality / Speed / General)
   - one-line summary
   - urgency_score (1-10)

3) Also return:
   - top trending issues
   - top positive highlights
   - top negative highlights
   - spike_alert (true/false)
   - spike_reason (optional)
 and give it all data in json i repeat only give the json data`;

    // Call Gemini
    const result = await model.generateContent(prompt);
    const ai = JSON.parse(result.response.text());

    // Insert mentions into DB
    for (let m of ai.mentions) {
      await db.insert(mentions).values({
        brandId: brandId,
        source: m.platform,
        author: "",
        content: m.content,
        url: "",
        sentimentScore: m.sentiment_score,
        sentimentLabel: m.sentiment_label,
        topic: m.topic,
        insight: m.summary,
      });
    }

    // Return Data to Frontend
    return res.json({
      message: "AI mentions fetched successfully",
      data: ai, // contains mentions + insights + spike alert
    });

  } catch (err) {
    console.log("Gemini Fetch Error:", err);
    return res.status(500).json({ error: "Internal error", details: err });
  }
};

export default ScrapeBrandDataFromGemini;

