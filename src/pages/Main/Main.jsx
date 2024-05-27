import React from "react";

const Main = () => {
  return (
    <div className="py-80">
      <main className="flex flex-col justify-center items-center text-center">
        <h1>Stepanova Sakhaaya</h1>
        <p>frontend dev</p>
        <nav className="mt-10 flex gap-5">
          <a href="#about">about</a>
          <a href="#project">project</a>
          <a href="#contact">contact</a>
        </nav>
      </main>
    </div>
  );
};

export default Main;
