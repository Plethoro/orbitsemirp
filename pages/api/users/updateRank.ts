// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import nodemailer from 'nodemailer'

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
        rank: newRank as any
      }
    })

    res.status(200).send({ name: 'updatedUserRank' });

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_MAIL,
        pass: process.env.GMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.GMAIL_MAIL,
      to: process.env.GMAIL_MAIL,
      subject: 'New Rank Purchased',
      text: `New Rank purchased:\nSteam ID: ${steamId}\nRank: ${newRank}`,
    }
    
    transport.sendMail(mailOptions);
  }
  catch {
    res.status(500).send({ name: 'failed' });
  }
}