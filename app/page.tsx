import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Our Job Application Portal
        </h1>
        <p className="text-xl mb-8">Find your dream job and apply with ease</p>
        <div className="space-x-4">
          <Link href="/jobs" passHref>
            <Button size="lg">See Jobs</Button>
          </Link>
          <Link href="/admin" passHref>
            <Button variant="outline" size="lg">
              Admin Dashboard
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
