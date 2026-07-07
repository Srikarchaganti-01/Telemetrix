import React from "react";
import {
  RecordsForm,
  Navbar,
  LoginForm,
  LogoutButton,
  NewsForm,
  Footer,
  ResultsForm,
  Loader,
} from "../Components";
import { useAuth } from "../hooks/useAuth";

function Admin() {
  const { loading, isSignedIn, refresh } = useAuth();

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center ">
          <div className="text-xl font-semibold text-zinc-300 animate-pulse">
            <Loader />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen  flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-xl rounded-3xl shadow-2xl p-8">
            <h1 className="text-4xl font-black text-gray-400 mb-2">
              Admin Login
            </h1>
            <p className="text-zinc-400 mb-8">
              Sign in to access the Formula 1 Admin Dashboard.
            </p>

            <LoginForm onSuccess={refresh} />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen  m-5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-10 pt-8">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-gray-400 italic">
              Admin Dashboard
            </h1>

            <p className="text-zinc-400 mt-3 text-lg">
              Manage news, records and race results.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <LogoutButton onLoggedOut={refresh} />
          </div>
        </div>

        <div className="mx-10 mt-8 h-px bg-zinc-800"></div>

        <div className="px-10 py-10 space-y-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl  shadow-xl transition-all duration-300  hover:-translate-y-1 p-10">
              <h2 className="text-2xl font-bold text-gray-400 mb-6">
                News Management
              </h2>
              <NewsForm />
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 shadow-xl transition-all duration-300  hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-gray-400 mb-6">
                Records Management
              </h2>
              <RecordsForm />
            </div>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 shadow-xl transition-all duration-300  hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-gray-400 mb-6">
              Race Results
            </h2>

            <ResultsForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admin;
