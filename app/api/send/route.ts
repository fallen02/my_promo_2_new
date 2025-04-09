import { AdminEmailTemp } from "@/components/email-template/admin-back-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface AdminEmailTempProps {
  fullName: string;
  email: string;
  phoneNO: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest, res: NextResponse) {

  const body: AdminEmailTempProps = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `MyPromo <noreply@mypromo.in>`,
      to: "mypromofficial@gmail.com",
      subject: "New Message from Website",
      react: AdminEmailTemp({ ...body }),
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Error in sending email", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
        { message: "Email sent successfully", data },
        { status: 200 }
    )
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error in sending email", error },
      { status: 500 }
    );
  }
}
