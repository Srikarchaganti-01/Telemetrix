import React from "react";
import {
  Navbar,
  LoginForm,
  NewsForm,
  StandingsForm,
  Footer,
} from "../Components";

function Admin() {
  return (
    <>
      {/* <h1 className="text-4xl font-bold ">Admin page</h1> */}
      <Navbar />
      <StandingsForm />
      <NewsForm />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Admin;
