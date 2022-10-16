// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sets } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import nodemailer from 'nodemailer'

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

    const newSet: sets = await prisma.sets.create({
      data: {
        user_id: userId,
        name: setName
      }
    });

    res.status(200).send({ newSet } as any);

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST as string,
      port: Number(process.env.EMAIL_SERVER_PORT as string),
      secure: true,
      auth: {
        user: process.env.GMAIL_MAIL,
        pass: process.env.GMAIL_PASS
      }
    })

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
