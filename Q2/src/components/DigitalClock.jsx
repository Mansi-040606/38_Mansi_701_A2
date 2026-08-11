import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container mt-4">
      <div className="card p-4 text-center">
        <h2>Digital Clock</h2>

        <h1 className="display-4">
          {time.toLocaleTimeString()}
        </h1>
      </div>
    </div>
  );
}

export default DigitalClock;