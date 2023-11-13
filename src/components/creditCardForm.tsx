"use client";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import CardAlert from "./cardAlert";

interface DataType {
  valid: boolean;
}

export default function CreditCardForm() {
  const [showAlert, setShowAlert] = useState<undefined | "success" | "error">(
    undefined,
  );
  const [creditCard, setCreditCard] = useState<string>("");
  const handleCCValidation = async () => {
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(creditCard),
    });
    const data: DataType = await res.json();
    setShowAlert(data.valid ? "success" : "error");
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(undefined);
      }, 2000);
    }
  }, [showAlert]);
  return (
    <>
      <Label htmlFor="credit-card">Credit Card</Label>
      <Input
        placeholder="Enter credit card to validate..."
        id="credit-card"
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
      <div className="flex justify-end py-4">
        <Button
          variant={"outline"}
          className="mx-2"
          onClick={() => setCreditCard("")}
        >
          Clear
        </Button>
        <Button onClick={handleCCValidation}>Submit</Button>
      </div>
      <CardAlert
        showAlert={showAlert}
        message={
          showAlert === "success"
            ? "Your credit card has been successfully validated."
            : "There was an error validating your card"
        }
      />
    </>
  );
}
