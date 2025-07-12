import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/biodatas");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-green-50 border border-green-200 px-8 py-10 rounded-2xl shadow-md text-center max-w-sm w-full"
      >
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h2 className="text-2xl font-semibold text-green-700">Payment Successful!</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Redirecting to your biodata list...
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
