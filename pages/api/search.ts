import type { NextApiRequest, NextApiResponse } from "next";
import { Clinic, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  results: Clinic[];
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { searchTerm, location } = req.body;
    let response: Clinic[] = [];
    if (location && !searchTerm) {
      response = await prisma.clinic.findMany({
        where: {
          area: {
            contains: location,
            mode: "insensitive",
          },
        },
      });
    }

    if (searchTerm) {
      response = await prisma.clinic.findMany({
        where: {
          OR: [
            {
              area: {
                contains: location ? location : searchTerm,
                mode: "insensitive",
              },
            },
            {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
            {
              address: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          ],
        },
      });
    }
  
    res.status(200).json({ results: response, message: "search api success" });
  } catch (error) {
    res.status(500).json({ results: [], message: "search api failed" });
  }
}
