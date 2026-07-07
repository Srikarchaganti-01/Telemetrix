import React, { useState } from "react";
import { account } from "../../lib/appwrite";

function LogoutButton({ onLoggedOut }) {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      onLoggedOut?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="text-sm border border-neutral-700 hover:border-red-900 text-gray-400 px-4 py-2 rounded-lg transition"
    >
      {loading ? "Signing out..." : "Log out"}
    </button>
  );
}

export default LogoutButton;
