import { Request, Response } from "express";
import db from "../Database/db";
import { brands, brandKeywords } from "../Database/schema";
import { eq } from "drizzle-orm";

const GetBrandDetail = async (req: any, res: Response) => {
  try {
    const brandId = Number(req.params.brandId);

    // Fetch the brand
    const brand = await db
      .select()
      .from(brands)
      .where(eq(brands.id, brandId));

    if (!brand.length) {
      return res.status(404).json({ error: "Brand not found" });
    }



    // Fetch keywords
    const keywordRows = await db
      .select()
      .from(brandKeywords)
      .where(eq(brandKeywords.brandId, brandId));

    return res.json({
      brand: brand[0],
      keywords: keywordRows,
    });

  } catch (error) {
    console.log("GetBrandDetail error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default GetBrandDetail;

