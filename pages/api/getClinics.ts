import type { NextApiRequest, NextApiResponse } from "next";
import { Clinic, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  clinics: Clinic[];
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await prisma.clinic.findMany();

    res
      .status(200)
      .json({ clinics: response, message: "getClinics api success" });
  } catch (error) {
    res.status(500).json({ clinics: [], message: "getClinics api failed" });
  }
}
