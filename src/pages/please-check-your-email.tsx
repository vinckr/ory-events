import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { NextPage } from "next";

const CheckEmail: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow p-4">
        <h1 className="text-4xl mb-4 m-auto text-center">
          Please check your email for a link to confirm your account and log in!
        </h1>
      </main>
      <Footer />
    </div>
  );
};

export default CheckEmail;
