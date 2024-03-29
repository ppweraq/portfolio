import React from "react";

const Project = () => {
  return (
    <div id="project" className="p-20">
      <div className="border border-red-500 rounded-lg p-3">
        <h3>Jewelry Shop</h3>
        <article>
          <p>
            the jewelry store's website. when placing an order, the customer's
            data is sent to our email for communication using the nodemailer
            library on node.js. currently updating the website
            <a class="demo" href="https://jewelry-testapp.netlify.app/ ">
              {" "}
              demo
            </a>
            <br />
            <em className="mr-4">React</em> <em className="mr-4">CSS</em>{" "}
            <em className="mr-4">Node JS</em>{" "}
            <em className="mr-4">React Router DOM</em>
          </p>
        </article>
      </div>
      <div className=" mt-10 border border-red-500 rounded-lg p-3">
        <h3>To Do</h3>
        <article>
          <p>
            to do the site. localstorage is used to store tasks
            <a
              class="demo"
              href="https://todo-testapp.netlify.app/"
            >
              {" "}
              demo
            </a>
            <br />
            <em className="mr-4">JavaScript</em> <em className="mr-4">HTML</em>{" "}
            <em className="mr-4">CSS</em> <em className="mr-4">Localstorage</em>
          </p>
        </article>
      </div>
      <div className=" mt-10 border border-red-500 rounded-lg p-3">
        <h3>Web3 Wallet</h3>
        <article>
          <p>
            connecting to the metamaks wallet through the chrome extension shows
            our address, balance and which network we are connected to. we can
            also make transactions
            <a class="demo" href="https://amazing-sable-39b31e.netlify.app/">
              {" "}
              demo
            </a>
            <br />
            <em className="mr-4">Next JS</em>{" "}
            <em className="mr-4">TypeScript</em>{" "}
            <em className="mr-4">Tailwind</em> <em className="mr-4">Web3 JS</em>
          </p>
        </article>
      </div>
      <div className=" mt-10 border border-red-500 rounded-lg p-3">
        <h3>Portfolio For The Photographer</h3>
        <article>
          <p>
            soon
            {/* <a class="demo" href="">
              {" "}
              demo
            </a>
            <br />
            <em className="mr-4">Next JS</em>{" "}
            <em className="mr-4">TypeScript</em>{" "}
            <em className="mr-4">Tailwind</em> <em className="mr-4">Web3 JS</em> */}
          </p>
        </article>
      </div>
    </div>
  );
};

export default Project;
