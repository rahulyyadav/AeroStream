"use client";

import { useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { countries } from "@/utils/countries";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UserLoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(""); // Default country code will be set based on first country in useEffect
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Set initial country code to the first country's code on mount
  useEffect(() => {
    if (countries.length > 0) {
      setCountryCode(countries[0].phone_code);
    }
  }, []);

  const handleSendOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setLoginSuccess(false);

    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: fullPhoneNumber,
      });

      if (error) throw error;

      setOtpSent(true);
      // Optionally show a message indicating OTP sent
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

    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: fullPhoneNumber,
        token: otp,
        type: "sms",
      });

      if (error) throw error;

      // Check if user data exists in your 'users' table (optional, based on your flow)
      // const { data: userData, error: userError } = await supabase
      //   .from('users')
      //   .select('id')
      //   .eq('id', data.user.id)
      //   .single();

      // if (userError) throw userError; // Handle case where user might not be in your specific table

      setLoginSuccess(true);
      // Redirect on successful login after a short delay
      setTimeout(() => {
        router.push("/user_home"); // Replace with your desired user dashboard path
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-2xl p-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-blue-600 mb-2">
              Welcome Back
            </h1>
            <p className="text-sm text-gray-600">
              Please enter your phone number to continue.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {loginSuccess && (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4 text-center text-sm">
              Login successful! Redirecting...
            </div>
          )}

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <div className="flex items-center">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="flex-shrink-0 mr-2 px-3 py-2 border border-gray-400 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 text-sm w-1/4"
                    aria-label="Select Country Code"
                  >
                    {countries.map(
                      (country: {
                        code: string;
                        name: string;
                        phone_code: string;
                      }) => (
                        <option key={country.code} value={country.phone_code}>
                          {country.name} ({country.phone_code})
                        </option>
                      )
                    )}
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 w-3/4"
                    required
                    aria-label="Phone Number"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OTP *
                </label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
                  required
                  aria-label="Enter OTP"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </form>
          )}

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            &copy; 2024 Your Health Companion. All rights reserved.
          </div>
        </motion.div>
      </div>
    </>
  );
}
