import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://harvest.greenhouse.io/v1/candidates",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.GREENHOUSE_API_KEY + ":").toString("base64")}`,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching from Greenhouse:", error);
    return NextResponse.json(
      { message: "Error fetching candidates" },
      { status: 500 },
    );
  }
}
