export async function GET(request: Request) {
  let today = new Date().getTime();
  let remaining = today + 864_000_000;

  let data = {
    remaining: remaining,
    today: today,
  };
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}