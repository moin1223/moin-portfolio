import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="text-center text-white py-3">
        <footer>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.facebook.com" className="text-decoration-none text-warning">Mohammad Moin Uddin</a>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
