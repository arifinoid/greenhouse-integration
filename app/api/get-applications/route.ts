import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const per_page = searchParams.get("per_page") || "100";

  try {
    const response = await axios.get(
      "https://harvest.greenhouse.io/v1/applications",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.GREENHOUSE_API_KEY + ":").toString("base64")}`,
        },
        params: {
          page,
          per_page,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching from Greenhouse:", error);
    return NextResponse.json(
      { message: "Error fetching applications" },
      { status: 500 },
    );
  }
}
