"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#133E87] text-white text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl md:text-3xl mb-6">Oops! Page Not Found</p>
      <p className="text-lg md:text-xl mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-white text-[#133E87] py-2 px-6 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
