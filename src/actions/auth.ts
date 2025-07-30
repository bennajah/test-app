"use server";

import { createClient } from "@/lib/supabase/server";
import { type SignInFormValues, signInSchema } from "@/schemas/auth";

export async function signIn(values: SignInFormValues) {
  const validated = signInSchema.safeParse(values);
  if (!validated.success) {
    return { error: validated.error.message };
  }
  const { email, password } = validated.data;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return { error: error.message };
  }

  return { error: null };
}

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return { error: error.message };
  }

  return { error: null };
}
