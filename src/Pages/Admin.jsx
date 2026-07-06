import React from "react";
import {
  RecordsForm,
  Navbar,
  LoginForm,
  LogoutButton,
  NewsForm,
  StandingsForm,
  Footer,
  ResultsForm,
} from "../Components";
import { useAuth } from "../hooks/useAuth";

function Admin() {
  const { loading, isSignedIn, refresh } = useAuth();

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-[50vh] flex items-center justify-center text-white">
          Checking session...
        </div>
        <Footer />
      </>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <LoginForm onSuccess={refresh} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-end px-6 py-4">
        <LogoutButton onLoggedOut={refresh} />
      </div>
      <div className="text-5xl text-gary-400 ml-10 font-black italic">
        Admin DashBoard
      </div>
      <div className="flex justify-between items-start">
        <NewsForm />
        <RecordsForm />
      </div>
      <ResultsForm />

      <Footer />
    </>
  );
}

export default Admin;
