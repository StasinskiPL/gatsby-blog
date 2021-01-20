import React from "react";

const GoToTopBtn = () => {
  const btn = React.useRef(null);

  if(typeof window !== `undefined`){

  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      if (btn.current) {
        btn.current.style.opacity = "1";
        btn.current.style.pointerEvents = "auto";
      }
    } else {
      if (btn.current) {
        btn.current.style.opacity = "0";
        btn.current.style.pointerEvents = "none";
      }
    }
  });
};


  return (
    <button ref={btn} className="goToTop" onClick={() => window.scrollTo(0, 0)}>
      ↑
    </button>
  );
};

export default GoToTopBtn;
