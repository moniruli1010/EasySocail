import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const { priceId, customerEmail } = await req.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    customer_email: customerEmail,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.APP_URL}/dashboard/billing?status=success`,
    cancel_url: `${process.env.APP_URL}/dashboard/billing?status=cancel`
  });

  return NextResponse.json({ checkoutUrl: session.url });
}
