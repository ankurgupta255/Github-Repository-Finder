import React from "react";

const Footer = () => {
  return (
    <footer
      class="bg-near-black white-80 pv2 ph4 relative bottom-0 w-100"
      style={{ "margin-top": "50vh" }}
    >
      <p class="f6">
        <span class="dib mr4 mr5-ns">Ankur Gupta 2020</span>
        <a
          class="link white-80 hover-light-purple"
          href="https://github.com/ankurgupta255"
        >
          Github
        </a>{" "}
        /
        <a
          class="link white-80 hover-gold"
          href="https://www.linkedin.com/in/ankurgupta255/"
        >
          {" "}
          LinkedIn{" "}
        </a>{" "}
        /
        <a
          class="link white-80 hover-green"
          href="https://ankurgupta255.github.io/"
        >
          {" "}
          reachankurgupta.me{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
