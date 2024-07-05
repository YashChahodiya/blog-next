"use client";

import { useEffect, useState } from "react";

const Index = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/f-app/pages/api/api.ts");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error  is there :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen">
      <div>{message}</div>
    </div>
  );
};

export default Index;
