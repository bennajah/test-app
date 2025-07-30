import { AuthContext } from "@/providers/auth-provider";
import * as React from "react";

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
