import type { NextApiRequest, NextApiResponse } from "next";

export default function createComment(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
