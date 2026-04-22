export async function POST(request: Request): Promise<Response> {
  try {
    const payload = await request.json();

    const scriptUrl =
      process.env.GAS_WEB_APP_URL ||
      "https://script.google.com/macros/s/AKfycbxGX_f0eIXEJ8WV1H0PGrMP02FDCMhFImJg8DQEtPypmsDscxd-HcjjsNZRVy8qiR-A/exec";

    const responseFromGas = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Avoid caches for form submissions
      cache: "no-store"
    });

    const text = await responseFromGas.text();
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      // Some GAS deployments may return plain text
      parsed = {
        status: responseFromGas.ok ? "success" : "error",
        message: text
      };
    }

    // Always respond with JSON to the client
    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: "error", message: (error as Error).message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Optional: handle preflight if ever accessed cross-origin in future
export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
