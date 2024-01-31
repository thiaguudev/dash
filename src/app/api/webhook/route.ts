import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

import { stripe } from "@/lib/stripe";

const stripeWebhookEvents = new Set([
  "checkout.session.completed",
  "invoice.payment_succeeded",
]);

export async function POST(req: NextRequest) {
  const sig = headers().get("Stripe-Signature");
  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET_LIVE ?? process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;
  const body = await req.text();

  try {
    if (!sig || !webhookSecret) {
      console.log(
        "🔴 Error Stripe webhook secret or the signature does not exist."
      );
      return;
    }
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    console.log(event);
  } catch (error: any) {
    console.log(`🔴 Error ${error.message}`);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }
  console.log(sig);
  return NextResponse.json({ message: "ok" });
}
