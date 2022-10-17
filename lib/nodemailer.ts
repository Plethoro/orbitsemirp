import nodemailer from 'nodemailer'

export const transport = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST as string,
  port: Number(process.env.EMAIL_SERVER_PORT as string),
  secure: true,
  auth: {
    user: process.env.GMAIL_MAIL,
    pass: process.env.GMAIL_PASS
  }
})