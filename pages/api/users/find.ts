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

    const user = await prisma.users.findFirst({
      where: {
        steam_id: steamId
      }
    })

    const purchasedSets: { name: string }[] = await prisma.sets.findMany({
      where: {
        user_id: user?.id
      },
      select: {
        name: true,
      }
    })

    const userWithSets = { ...user, sets: purchasedSets };
    // @ts-ignore
    userWithSets.rank = userWithSets.rank?.replace('_', '+');

    res.status(200).send({ user: userWithSets } as any);
  }
  catch {
    res.status(500).send({ name: 'failed' });
  }
}
