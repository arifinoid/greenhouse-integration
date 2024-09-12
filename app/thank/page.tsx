import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Thank You for Your Application!
      </h1>
      <p className="text-xl mb-8">
        We have received your application and will review it shortly.
      </p>
      <Link href="/" passHref>
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
}
