import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { fname, lname, phone, email, budget, service, message } = await req.json();

 let  name: string = fname + " " + lname;
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'neontek6@gmail.com',
        pass: 'qamtjtuytpmihjik'
      }
    });



    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'neontek6@gmail.com',
      subject: `New message from ${name} `,
      html: `
        <h2>New Contact Message From Neontek's Website</h2>s
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
  }
}
