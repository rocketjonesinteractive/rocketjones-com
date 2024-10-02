import { NextResponse } from 'next/server';

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  if (!validateEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
      },
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    if (response.status >= 400) {
      const { title, detail } = await response.json();
      if (title !== 'Member Exists') {
        return NextResponse.json(
          { error: `There was an error subscribing to the newsletter. Error: ${detail}` },
          { status: 400 },
        );
      }
    }

    return NextResponse.json({ name, email, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || error.toString() }, { status: 500 });
  }
}
