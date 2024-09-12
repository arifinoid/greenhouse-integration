import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  if (!id) {
    return NextResponse.json(
      { message: "Job ID is required" },
      { status: 400 },
    );
  }

  try {
    const response = await axios.get(
      `https://harvest.greenhouse.io/v1/job_posts/${id}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.GREENHOUSE_API_KEY + ":").toString("base64")}`,
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching jobs from Greenhouse:", error);
    return NextResponse.json(
      { message: "Error fetching jobs from Greenhouse" },
      { status: 500 },
    );
  }
}
