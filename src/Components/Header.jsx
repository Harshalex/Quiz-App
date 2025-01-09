import React from "react";

function Header() {
  return (
    <div className="flex  items-center gap-5">
      <img
        className="h-52 text-black "
        src="https://pnghq.com/wp-content/uploads/pnghq.com-react-logo-high-resolutio-8-2048x1781.png"
        alt="react-icon"
      />
      <p className="text-5xl font-bold text-violet-500">The React Quiz APP</p>
    </div>
  );
}

export default Header;
