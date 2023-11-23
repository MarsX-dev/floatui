import axios from "axios";
import { NextResponse } from "next/server";

function getNameFromEmail(email: string) {
  // Split the email by the '@' character
  const parts = email.split("@");

  // Check if the email has a valid format
  if (parts.length < 2) {
    return ""; // Return an empty string for invalid email
  }

  // Return the first part of the split as the name
  return parts[0];
}

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const res = await axios.post(
      `${process.env.CONVERTKIT_API_URL}/subscribe`,
      {
        email,
        first_name: getNameFromEmail(email),
        api_key: process.env.CONVERTKIT_API_KEY,
      }
    );
    return NextResponse.json({ confirmation: res.data });
  } catch (err) {
    return NextResponse.json({ err: "Email address is invalid" });
  }
}
