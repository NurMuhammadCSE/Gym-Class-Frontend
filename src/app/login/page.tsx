"use client";

import { userLogin } from "@/Services/Actions/userLogin";
import { storeUserInfo } from "@/Services/authServices";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const result = await userLogin(data);
      console.log(result)
      if (result?.data?.token) {
        storeUserInfo({ accessToken: result?.data?.token });
        toast.success(result?.message);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#133E87] text-white px-4">
      <div className="w-full max-w-md bg-white text-[#133E87] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#608BC1]"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#608BC1] text-white font-semibold py-2 rounded-lg hover:bg-opacity-90"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-[#608BC1] hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
