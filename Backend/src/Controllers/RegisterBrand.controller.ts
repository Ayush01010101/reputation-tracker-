import db from "../Database/db";
import { brands, brandKeywords } from "../Database/schema";
import { Response } from "express";
const CreateBrand = async (req: any, res: Response) => {
  try {
    const userId = req.auth.userId;

    const {
      brandName,
      website,
      category,
      logoUrl,
      social,
      alertEmail,
      keywords,
    } = req.body;

    if (!brandName)
      return res.status(400).json({ error: "Brand name is required" });

    if (!keywords || keywords.length === 0)
      return res
        .status(400)
        .json({ error: "At least one keyword is required" });


    // INSERT BRAND DATA
    const result = await db
      .insert(brands)
      .values({
        userId,
        brandName,
        website,
        category,
        logoUrl,
        social, // json: { twitter: "", youtube: "", reddit: "" }
        alertEmail,
      })
      .returning();

    const brandId = result[0].id;

    for (let kw of keywords) {
      await db.insert(brandKeywords).values({
        brandId,
        keyword: kw,
      });
    }

    res.json({
      message: "Brand successfully created",
      brand: result[0],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};



export default CreateBrand;

