import React, { useRef, useEffect } from "react";
import "./Main.css";

const Main = ({ smoothMove = 3 }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const smoothFactor = smoothMove / 100;

    const handleMouseMove = (event) => {
      const rotateX = (event.clientY - window.innerHeight / 2) * smoothFactor;
      const rotateY =
        ((event.clientX - window.innerWidth / 2) * -smoothFactor) / 2;

      // set CSS variables
      root.style.setProperty("--rotate-x", `${rotateX}deg`);
      root.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [smoothMove]);

  return (
    <div ref={rootRef} className="py-80">
      <main className="relative flex flex-col justify-center items-center text-center">
        <img src="./img/ellipse.svg" alt="" className="absolute z-0"/>
        <div className="relative z-1">
          <h1>Stepanova Sakhaaya</h1>
          <p>frontend dev</p>
        <nav className="mt-10 flex justify-center gap-5">
          <a href="#about">about</a>
          <a href="#project">project</a>
          <a href="#contact">contact</a>
        </nav>
        </div>
      </main>
    </div>
  );
};

export default Main;
