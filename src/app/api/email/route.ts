import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { readdir, readFile, unlink } from 'fs/promises';
import { existsSync, statSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    let fileContent = null;
    const tmpDir = '/tmp';
    const files = await readdir(tmpDir);
    if (files.length > 0) {
      const fileName = files[0];
      const filePath = `${tmpDir}/${fileName}`;
      const isFile = statSync(filePath).isFile();
      if (existsSync(filePath) && isFile) {
        fileContent = await readFile(filePath);
      }
    }

    const transporterGmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_MY_EMAIL_GMAIL,
        pass: process.env.NEXT_PUBLIC_MY_PASSWORD_GMAIL,
      },
    });

    const transporterHotmail = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: process.env.NEXT_PUBLIC_MY_EMAIL_HOTMAIL,
        pass: process.env.NEXT_PUBLIC_MY_PASSWORD_HOTMAIL,
      },
    });

    const sendMailPromise = (transporter: any, mailOptions: any) =>
      new Promise<string>((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err: any, info: any) {
          if (err) {
            reject(err.message);
          } else {
            resolve('E-mail envoyé');
          }
        });
      });

    const mailOptionsGmail: Mail.Options = {
      from: process.env.NEXT_PUBLIC_MY_EMAIL_GMAIL,
      to: process.env.NEXT_PUBLIC_MY_EMAIL_GMAIL,
      subject: `Vous avez reçu un e-mail de ${name} ${email} depuis votre site internet (Gmail).`,
      text: message,
      attachments: fileContent
    ? [
        {
          filename: 'filename.pdf', 
          content: fileContent
        },
      ]
    : [],
    };
    await sendMailPromise(transporterGmail, mailOptionsGmail);

    const mailOptionsHotmail: Mail.Options = {
      from: process.env.NEXT_PUBLIC_MY_EMAIL_HOTMAIL,
      to: process.env.NEXT_PUBLIC_MY_EMAIL_HOTMAIL,
      subject: `Vous avez reçu un e-mail de ${name} ${email} depuis votre site internet (Outlook).`,
      text: message,
      attachments: fileContent
    ? [
        {
          filename: 'filename.pdf',
          content: fileContent
        },
      ]
    : [],
    };
    await sendMailPromise(transporterHotmail, mailOptionsHotmail);

    if (files.length > 0) {
      const fileName = files[0];
      const filePath = `${tmpDir}/${fileName}`;
      try {
        const isFile = statSync(filePath).isFile();
        if (existsSync(filePath) && isFile) {
          fileContent = await readFile(filePath);
          await unlink(filePath);
          console.log(`File ${filePath} deleted successfully.`);
        }
      } catch (error) {
        console.error(`Error reading/deleting file ${filePath}:`, error);
      }
    }

    return NextResponse.json({ message: 'E-mail envoyé' });
  } catch (err: any) {
    console.error('Error in server route:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
