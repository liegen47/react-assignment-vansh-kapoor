import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Plus, Minus, RotateCcw, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function Counter() {
  const [count, setCount] = useState(0);

  const springs = useSpring({
    from: { height: "0%" },
    to: { height: `${Math.min(Math.abs(count) * 1, 100)}%` },
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const backgroundColor = count >= 0 ? "bg-blue-500/20" : "bg-red-500/20";

  return (
    <Card className="w-full max-w-md relative overflow-hidden">
      <Tooltip>
        <TooltipTrigger className="z-50 absolute top-2 right-2">
          <Info size={12} className="ml-2 cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent className="w-64">
          <p>
            Buttons for increment, decrement, and reset to manage a count. The
            background color level increases linearly (preferably using a bezier
            curve). Reset button sets the background color level back to 0.
          </p>
        </TooltipContent>
      </Tooltip>
      <animated.div
        style={springs}
        className={`absolute bottom-0 left-0 w-full ${backgroundColor} transition-colors z-0`}
      />
      <CardHeader className="relative z-10">
        <CardTitle className="text-center text-4xl">{count}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCount((c) => c + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCount(0)}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCount((c) => c - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Counter;
