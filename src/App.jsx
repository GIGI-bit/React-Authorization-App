/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthSwitcher from "./components/AuthSwitcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthSwitcher />
    </>
  );
}

export default App;
