import db from "../Database/db";
import { Response } from "express";
import { brands } from "../Database/schema";
import { eq } from "drizzle-orm";
import AppError from "../Utlity/AppError";

const ListBrands = async (req: any, res: Response) => {

  const userId = req.auth.userId;

  if (!userId) {
    new AppError("User Is Unautorized", 400)
  }

  const result = await db.select()
    .from(brands)
    .where(eq(brands.userId, userId));

  res.json(result);
}

export default ListBrands
