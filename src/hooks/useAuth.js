// src/hooks/useAuth.js
import { useCallback, useEffect, useState } from "react";
import { account } from "../lib/appwrite";

// Checks Appwrite for an active session and exposes it as React state.
// Call `refresh()` right after login/logout so the UI updates immediately.
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const current = await account.get();
      setUser(current);
    } catch {
      setUser(null); // no active session
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { user, loading, isSignedIn: !!user, refresh };
}
