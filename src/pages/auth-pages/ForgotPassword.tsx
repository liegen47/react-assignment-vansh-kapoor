import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      setIsLoading(true);
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error("Failed to send password reset email.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="text-4xl font-bold text-purple-700">
            upliance.ai
          </Link>

          <h2 className="mt-12 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Reset Password
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Enter your email to receive a password reset link.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <Button
            onClick={handleResetPassword}
            disabled={isLoading}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white"
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>

          <p className="text-center text-sm text-gray-600">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-700 hover:text-purple-600"
            >
              Go back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
