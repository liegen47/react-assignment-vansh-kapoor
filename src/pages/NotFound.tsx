import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Card className="w-full max-w-md relative overflow-hidden">
        <CardHeader className="relative z-10">
          <CardTitle className="text-center text-4xl">404</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-lg text-gray-700">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button className="mt-4 px-4 py-2 ">
            <Link to="/">Go Back Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
