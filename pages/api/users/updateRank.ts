// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import nodemailer from 'nodemailer'
import { transport } from '../../../lib/nodemailer'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const steamId: string = req.body.steamId;
    const newRank: string = req.body.newRank.replace('+', '_');

    await prisma.users.updateMany({
      where: {
        steam_id: steamId
      },
      data: {
        rank: newRank as any
      }
    })

    res.status(200).send({ name: 'updatedUserRank' });

    const mailOptions = {
      from: process.env.GMAIL_MAIL,
      to: process.env.RECIPIENT_MAIL,
      subject: 'New Rank Purchased',
      text: `New Rank purchased:\nSteam ID: ${steamId}\nRank: ${newRank}`,
    }
    
    transport.sendMail(mailOptions);
  }
  catch (err) {
    console.log(err)
    res.status(500).send({ name: 'failed' });
  }
}