"use client";

import { signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function SignOutButton() {
  const router = useRouter();
  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error(error);
    } else {
      toast.success("Signed out successfully");
      router.refresh();
    }
  };

  return (
    <Button variant="outline" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
