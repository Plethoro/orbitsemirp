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
    const newUser: any = req.body.newUser;

    let user = await prisma.users.findFirst({
      where: {
        steam_id: newUser.id
      }
    })

    if (!user) {
      user = await prisma.users.create({
        data: {
          steam_id: newUser.id,
          icon: newUser.icon,
          username: newUser.name
        }
      })
    }

    res.status(200).send({ user } as any);
  }
  catch {
    res.status(500).send({ name: 'failed' });
  }
}
