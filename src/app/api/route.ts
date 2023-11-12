import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const isLuhn = luhnCheck(data);
  return Response.json(isLuhn);
}

function luhnCheck(card: string) {
  const numVal = card.replace(/[^0-9]/g, "");
  const sums = [];
  let isSeconded = false;
  for (let i = numVal.length - 1; i >= 0; i--) {
    if (isSeconded) {
      let doubled = parseInt(numVal[i]!!) * 2;
      sums.push(doubled > 9 ? doubled - 9 : doubled);
    } else {
      sums.push(parseInt(numVal[i]!!));
    }
    isSeconded = !isSeconded;
  }
  const totalSum = sums.reduce((acc, digit) => acc + digit, 0);
  return totalSum % 10 === 0;
}
