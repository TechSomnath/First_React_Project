import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/emerald-green-background-lights-isolated-it-style-stars-art-group_275207-3175.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 72px)",
        marginTop: "0",
      }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Welcome to Our Website!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Your one-stop solution for all your needs. Let's get started!
        </p>
        <a
          href="#services"
          className="inline-block bg-orange-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-orange-500 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
