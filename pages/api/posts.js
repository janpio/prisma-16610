const { PrismaClient } = require("@prisma/client")
let prisma = new PrismaClient()

export default async function handler(req, res) {
  const responce = await prisma.post.findMany({});

  res.status(200).json({ ...responce })
}
