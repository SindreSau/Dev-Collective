import { prisma } from "@/server/db";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        await prisma.term
          .findMany({
            orderBy: {
              name: "asc",
            },
          })
          .then((data) => {
            res.status(200).json(data);
          });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
