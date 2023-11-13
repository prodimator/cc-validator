import CreditCardForm from "~/components/creditCardForm";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { HelpCircle } from "lucide-react";

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
      <div className="absolute right-10 bottom-10">
        <Popover>
          <PopoverTrigger><HelpCircle /></PopoverTrigger>
          <PopoverContent>
            <div>
              <p className="text-sm">If you need a valid testing number:</p>
              <p className="font-semibold">5555 5555 5555 4444 </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
