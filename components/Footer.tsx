"use client";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-12">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Footer Content */}
        <p className="text-sm sm:text-base mb-4">
          © {2025} {"David Antonio Ty"}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
