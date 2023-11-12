"use client";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useState } from "react";

export default function CreditCardForm() {
  const [creditCard, setCreditCard] = useState<string>("");
  const handleCCValidation = async () => {
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(creditCard),
    });
    const data = await res.json();
  };
  return (
    <>
      <Label htmlFor="credit-card">Credit Card</Label>
      <Input
        placeholder="Enter credit card to validate..."
        className="my-1"
        value={creditCard}
        maxLength={19}
        onChange={(e) => {
          let stripped = e.target.value.replace(/[^0-9\s]/g, "");
          const numsLength = stripped.replace(/[^0-9]/g, "").length;
          if (
            numsLength % 4 === 0 &&
            numsLength < 16 &&
            numsLength > 0 &&
            stripped.length > creditCard.length
          ) {
            stripped += " ";
          }
          setCreditCard(stripped);
        }}
      />
      <div className="flex justify-end py-2">
        <Button
          variant={"outline"}
          className="mx-2"
          onClick={() => setCreditCard("")}
        >
          Clear
        </Button>
        <Button onClick={handleCCValidation}>Submit</Button>
      </div>
    </>
  );
}
