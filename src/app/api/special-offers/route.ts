import data from "@/Data/SpecialOffers.json";

export async function GET(request: Request) 
{
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}