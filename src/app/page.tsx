"use client";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

export default function HomePage() {
  const { loading, user } = useAuth();

  return (
    <main>
      <header className="flex items-center justify-between p-6 md:p-10">
        <div className="text-2xl font-bold">LOGO</div>

        <nav className="flex items-center space-x-4">
          {loading ? (
            <span>Loading...</span>
          ) : user ? (
            <>
              <span>Welcome, {user.email}</span>
              <SignOutButton />
            </>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/auth/sign-in">Sign In</Link>
            </Button>
          )}
        </nav>
      </header>

      <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10"></div>
    </main>
  );
}
