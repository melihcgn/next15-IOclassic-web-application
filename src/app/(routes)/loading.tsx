"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

const Loading: React.FC = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
  <div className="flex w-full justify-center items-center h-screen">
    <Progress value={progress} className="w-[30%]" />
  </div>
  );
};

export default Loading;
