"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const options = [
    {
      title: "User Login",
      description: "Login to your healthcare account",
      path: "/login/user",
      icon: "👤",
    },
    {
      title: "Doctor Login",
      description: "Login as a healthcare provider",
      path: "/login/doctor",
      icon: "👨‍⚕️",
    },
    {
      title: "Admin Login",
      description: "Login as a system administrator",
      path: "/login/admin",
      icon: "👨‍💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Account Type
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Select the type of account you want to login with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {option.title}
                </h2>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button
                  onClick={() => {
                    if (option.path === "/login/doctor") {
                      console.log("Doctor login button clicked");
                    }
                    router.push(option.path);
                  }}
                  className={`w-full text-white py-3 px-6 rounded-xl transition-colors duration-300 ${
                    index === 0
                      ? "bg-blue-600 hover:bg-blue-700"
                      : index === 1
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  Continue
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
