"use client";

import { useForm } from "react-hook-form";

type RegisterFormInputs = {
  fullName: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Register Data:", data);
    // Add your API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#133E87] text-white px-4">
      <div className="w-full max-w-md bg-white text-[#133E87] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#608BC1]"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#608BC1]"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#608BC1]"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#608BC1] text-white font-semibold py-2 rounded-lg hover:bg-opacity-90"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-[#608BC1] hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
