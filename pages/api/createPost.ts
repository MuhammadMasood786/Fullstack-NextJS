import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postBody = JSON.parse(req.body);
  try {
    const data = await prisma.post.create({
      data: {
        title: postBody.title,
        published: postBody.published,
        content: postBody.content,
      },
    });

    res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error);
  }
}
