import data from "@/Data/Mobile.json";

export async function GET(request: Request) 
{
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}