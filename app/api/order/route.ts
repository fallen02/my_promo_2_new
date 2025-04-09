import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

const razorpay = new Razorpay({
 key_id: process.env.RPAY_ID!,
 key_secret: process.env.RPAY_SECRET,
});

export async function POST(request: NextRequest) {
 const { amount, currency } = (await request.json()) as {
  amount: string;
  currency: string;
 };

 var options = {
  amount: amount,
  currency: "INR",
  receipt: 'rcp1',
 };
 const order = await razorpay.orders.create(options);
 return NextResponse.json({ orderId: order.id }, { status: 200 });
}