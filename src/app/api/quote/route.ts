import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://n8n.littlejalebis.com/webhook/2efcbd66-5c82-42e4-9eec-53cdab58daf4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit request to webhook" },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "";
    let data;
    if (contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = { text: await response.text() };
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error submitting quote proxy request:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
