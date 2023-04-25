import { useCallback, useState } from "react";

export default function Root() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div>
      <h1>💖 Hello World!</h1>
      <p>
        Welcome to your Electron application.
        <button onClick={handleClick}>count: {count}</button>
      </p>
    </div>
  );
}
