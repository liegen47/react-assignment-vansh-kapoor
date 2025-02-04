import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 size="48px" className="text-primary animate-spin" />
    </div>
  );
};

export default Loading;
