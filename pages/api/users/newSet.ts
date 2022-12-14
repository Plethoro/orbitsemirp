// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import nodemailer from 'nodemailer'
import { transport } from '../../../lib/nodemailer';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const userId: number = req.body.userId;
    const steamId: number = req.body.steamId;
    const setName: string = req.body.setName;

    const newSet = await prisma.sets.create({
      data: {
        user_id: userId,
        name: setName
      }
    });

    res.status(200).send({ newSet } as any);

    const mailOptions = {
      from: process.env.GMAIL_MAIL,
      to: process.env.RECIPIENT_MAIL,
      subject: 'New Set Purchased',
      text: `New Set purchased:\nSteam ID: ${steamId}\Set: ${setName}`,
    }

    transport.sendMail(mailOptions);
  }
  catch {
    res.status(500).send({ name: 'failed' });
  }
}
