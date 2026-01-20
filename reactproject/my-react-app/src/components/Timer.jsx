import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer started");

    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer cleaned up");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <strong>Timer:</strong> {seconds}s
    </div>
  );
};

export default Timer;
