// src/app/layout.js
import React from "react";
import "./globals.css"; // Ensure you have global styles or any required global styles
import Pagination from "../pagination/pagination";

export const metadata = {
  title: "My App",
  description: "Description of my app",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="border-x-customGreen border-x-8 border-b-customGreen border-y-8">
        {/* <header>
          <h1>VJ App</h1>
        </header> */}
        <main>{children}</main>
        <footer>
          <p className="flex justify-start">Page</p>
          <Pagination />
        </footer>
      </body>
    </html>
  );
};

export default Layout;
