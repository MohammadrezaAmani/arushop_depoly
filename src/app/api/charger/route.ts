import data from "@/Data/Chargers.json";

export async function GET(request: Request) 
{
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}