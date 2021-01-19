import React from "react";

const GoToTopBtn = () => {
  const btn = React.useRef(null);

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      if (btn) {
        btn.current.style.opacity = "1";
      }
    } else {
      if (btn) {
        btn.current.style.opacity = "0";
      }
    }
  });

  return (
    <button ref={btn} className="goToTop" onClick={() => window.scrollTo(0, 0)}>
      ↑
    </button>
  );
};

export default GoToTopBtn;
