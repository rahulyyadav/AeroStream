"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // Icons for password visibility

export default function DoctorLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState("password"); // 'password' or 'otp'
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle
  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handlePasswordLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // TODO: Implement doctor role checking here
      router.push("/dashboard/doctor"); // Replace with your desired doctor dashboard path
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      setOtpSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (error) throw error;

      // TODO: Implement doctor role checking here
      router.push("/dashboard/doctor"); // Replace with your desired doctor dashboard path
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-gray-800 rounded-2xl shadow-2xl p-8 text-white"
      >
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-6">Doctor Login</h1>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setLoginMethod("password")}
            className={`mr-2 px-4 py-2 rounded-md text-sm font-medium ${
              loginMethod === "password"
                ? "bg-green-600 text-white" // Active state color
                : "bg-gray-700 text-gray-300" // Inactive state color
            }`}
          >
            Email and Password
          </button>
          <button
            onClick={() => {
              setLoginMethod("otp");
              setOtpSent(false); // Reset OTP sent state when switching method
            }}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              loginMethod === "otp"
                ? "bg-green-600 text-white" // Active state color
                : "bg-gray-700 text-gray-300" // Inactive state color
            }`}
          >
            Email OTP
          </button>
        </div>

        {error && (
          <div className="bg-red-900 text-red-300 p-4 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {loginMethod === "password" && (
          <form onSubmit={handlePasswordLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-700 text-white"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-700 text-white pr-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {loginMethod === "otp" && !otpSent && (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <label
                htmlFor="email-for-otp"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email-for-otp"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-700 text-white"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {loginMethod === "otp" && otpSent && (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-gray-700 text-white"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
