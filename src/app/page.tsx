"use client";

import { useState } from "react";

export default function Home() {
  const [count, updateCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => updateCount(count + 1)}>Click me!!!</button>
    </div>
  );
}
