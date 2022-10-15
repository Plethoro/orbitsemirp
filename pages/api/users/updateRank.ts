// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const steamId: string = req.body.steamId;
    const newRank: string = req.body.newRank

    await prisma.users.updateMany({
      where: {
        steam_id: steamId
      },
      data: {
        rank: newRank
      }
    })

    res.status(200).send({ name: 'updatedUserRank' });
  }
  catch {
    res.status(500).send({ name: 'failed' });
  }
}