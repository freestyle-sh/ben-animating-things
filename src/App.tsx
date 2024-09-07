import { useState } from "react";
import a from "./assets/logo/a.png";
import b from "./assets/logo/b.png";
import c from "./assets/logo/c.png";
import "./index.css";

function App() {
  const [active, setActive] = useState(false);

  let mousedOn = false;
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[200px] "
        onMouseOver={() => {
          setActive(true);
          mousedOn = true;
        }}
        onMouseOut={() => {
          mousedOn = false;
          setTimeout(() => {
            if (!mousedOn) {
              setActive(false);
            }
          }, 300);
        }}
      >
        <div
          className={"relative w-[360px]  h-[360px] " +
            (active ? "customSpin" : "")}
        >
          <div className="absolute w-[360px] h-[360px]">
          </div>
          <img
            src={a}
            alt="a"
            className={"absolute z-[1] transition-all " + (!active
              ? "top-[80px] left-[0px] rotate-0"
              : "top-[140px] rotate-[-24deg] scale-50")}
          />
          <img
            src={b}
            alt="b"
            className={"absolute z-[2] transition-all " + (!active
              ? "top-[40px] left-[0px] rotate-0"
              : "top-[10px] left-[-80px] rotate-[-60deg]  scale-50")}
          />
          <img
            src={c}
            alt="c"
            className={"absolute z-[3] transition-all ease-in-out duration-300 " +
              (!active
                ? "top[0px] rotate-0 left-[0px]"
                : "top-[10px] rotate-[30deg] scale-50 left-[80px]")}
          />
        </div>
      </div>

      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Set Active
      </button>
    </>
  ); //80
}

export default App;
