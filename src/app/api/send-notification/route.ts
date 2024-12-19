import { NextResponse } from "next/server";
import twilio from "twilio";

// Initialize Twilio client
const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken =process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
  const { recipientId, phoneNumber, name, address } = await request.json();

  try {
    const message = await client.messages.create({
      body: `Urgent Blood Request Alert!\n\nRecipient: ${name}\nAddress: ${address}\nContact: ${phoneNumber}\n\nPlease check your BloodLink app for further details and respond as soon as possible.`,
      from: "whatsapp:+14155238886", // Your Twilio WhatsApp number
      to: `whatsapp:+916207432972`
    });
    console.log(message)
    return NextResponse.json({ success: true, messageSid: message.sid });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
