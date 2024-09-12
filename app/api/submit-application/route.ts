import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, job_id } = body;
    const payload = {
      first_name,
      last_name,
      email_addresses: [{ value: email, type: "personal" }],
      applications: [
        {
          job_id,
        },
      ],
    };

    const response = await axios.post(
      "https://harvest.greenhouse.io/v1/candidates",
      payload,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.GREENHOUSE_API_KEY + ":").toString("base64")}`,
          "Content-Type": "application/json",
          "On-Behalf-Of": process.env.GREENHOUSE_USER_KEY || "",
        },
      },
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error submitting application to Greenhouse:", error);
    return NextResponse.json(
      { message: "Error submitting application" },
      { status: 500 },
    );
  }
}
