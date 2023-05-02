import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-red-800 bg-slate-500">Hello World</h2>
      <div>
        <button className="btn">Button</button>
        <button className="btn btn-primary">Button</button>
        <button className="btn btn-secondary">Button</button>
        <button className="btn btn-accent">Button</button>
        <button className="btn btn-ghost">Button</button>
        <button className="btn btn-link">Button</button>
      </div>
    </>
  );
}

export default App;
