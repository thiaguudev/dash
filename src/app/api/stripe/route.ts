import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { getCurrentUser } from "@/lib/session";
import { stripe } from "@/lib/stripe";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json("Unauthorized", {
        status: StatusCodes.UNAUTHORIZED,
      });
    }

    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      mode: "subscription",
      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000#plans",
      metadata: {
        userId: user.id as string,
      },
      line_items: [
        {
          price_data: {
            currency: "BRL",
            product_data: {
              name: "Plan Starter",
              description: "Plan Starter",
            },
            unit_amount: 2000,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
    });
    console.log("Stripe", user);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("[STRIPE ERROR]", error);
    return new NextResponse("internal server error", {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}
