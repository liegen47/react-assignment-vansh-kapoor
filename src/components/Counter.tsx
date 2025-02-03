import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

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
