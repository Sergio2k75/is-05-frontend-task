import { fetchOllamaStatus } from "@/lib/ollama";
import { DEFAULT_HOST_URL } from "@/lib/hosts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const host = request.nextUrl.searchParams.get("host") ?? DEFAULT_HOST_URL;

  try {
    const status = await fetchOllamaStatus(host);
    return NextResponse.json(status);
  } catch {
    return NextResponse.json(
      {
        host,
        online: false,
        models: [],
        running: [],
        error: "Unable to reach Ollama host",
      },
      { status: 200 },
    );
  }
}
