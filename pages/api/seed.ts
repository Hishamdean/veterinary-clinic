import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Clinics } from "../../utils/clinics";

const prisma = new PrismaClient();

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await prisma.clinic.createMany({
      data: Clinics,
      skipDuplicates: true,
    });
  } catch (error) {
    res.status(500).json({ message: "api failed" });
  }

  res.status(200).json({ message: "success" });
}
