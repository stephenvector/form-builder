import { NextApiRequest, NextApiResponse } from "next";

export default function submitHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  res.json({ ok: "it works" });
}
