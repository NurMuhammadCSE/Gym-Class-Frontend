"use client";

const Banner = () => {
  return (
    <div className="bg-[#608BC1] text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-4 py-16">
        <h1 className="text-4xl font-bold md:text-6xl mb-4">Welcome to Gym Scheduler</h1>
        <p className="text-lg md:text-xl mb-6">
          Manage your gym classes, trainers, and memberships effortlessly.
        </p>
        <div className="space-x-4">
          <a
            href="/register"
            className="bg-white text-[#133E87] font-semibold py-2 px-6 rounded hover:bg-gray-200"
          >
            Join Now
          </a>
          <a
            href="/classes"
            className="bg-[#133E87] text-white border border-white font-semibold py-2 px-6 rounded hover:bg-opacity-80"
          >
            View Classes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
