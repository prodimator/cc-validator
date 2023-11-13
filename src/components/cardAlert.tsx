"use client";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface Props {
  showAlert: undefined | "success" | "error";
  message: string;
}
export default function CardAlert({ showAlert, message }: Props) {
  return (
    <Alert
      className={`
      ${showAlert ? "opacity-100" : "opacity-0"}
      ${showAlert === "success"
          ? "border-green-700 bg-green-100 text-green-700"
          : "border-red-700 bg-red-100 text-red-700"
        }  transition ease-in-out `}
    >
      {showAlert === 'success' ?
        <CheckCircle2
          className={`h-4 w-4`}
        /> :
        <AlertCircle
          className={`h-4 w-4`}
        />
      }
      <AlertTitle>{showAlert === "success" ? "Success!" : "Error!"}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
