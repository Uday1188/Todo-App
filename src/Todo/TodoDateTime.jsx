import React, { useState, useEffect } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDateTime(`${formatedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);
  return (
    <>
      <h5 className="d-flex justify-content-center align-items-center mb-5">
        {dateTime}
      </h5>
    </>
  );
};

export default TodoDateTime;
