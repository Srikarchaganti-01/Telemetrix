import React, { useState } from "react";
import { account } from "../../lib/appwrite";

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await account.createEmailPasswordSession({ email, password });
      const user = await account.get();
      onSuccess?.(user);
    } catch (err) {
      setError(err?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-16 px-4 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-gray-300"
      >
        <h1 className="text-2xl font-bold mb-1">Admin Login</h1>
        <p className="text-sm text-neutral-400 mb-6">
          Sign in to manage the site.
        </p>

        {error && (
          <div className="text-sm text-gray-400 bg-red-950/50 border border-red-900 rounded-lg px-3 py-2 mb-4">
            {error}
          </div>
        )}

        <label className="block text-xs text-neutral-400 mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
          className="w-full mb-4 bg-black border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-900"
        />

        <label
          className="block text-xs text-neutral-400 mb-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="w-full mb-6 bg-black border border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-900"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-950 hover:bg-red-900 disabled:opacity-60 text-white font-semibold rounded-lg py-2 text-sm transition"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
