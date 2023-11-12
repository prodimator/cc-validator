import CreditCardForm from "~/components/creditCardForm";
import { Separator } from "~/components/ui/separator";

export default async function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-medium">Credit Card Validator</div>
      <div className="py-4 text-sm font-normal">
        Please enter your credit card number below
      </div>
      <div className="w-full max-w-md">
        <Separator className="my-4" />
        <CreditCardForm />
      </div>
    </div>
  );
}
