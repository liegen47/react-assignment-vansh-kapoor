import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="mt-12 min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-purple-700">Now,</span>
              <br />
              <span className="text-purple-700">everyone</span>
              <br />
              <span className="text-purple-700">can </span>
              <span className="text-orange-500">cook</span>
              <br />
              <span className="text-orange-500">everything</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="text-purple-700 border-purple-700 hover:bg-purple-700 hover:text-white"
                onClick={() => navigate("/login")}
              >
                Evaluate Task<span className="ml-2">→</span>
              </Button>
              <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                Live Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] w-full">
            <img
              src="/images/hero.jpg"
              alt="Couple using Upliance smart cooking device"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
