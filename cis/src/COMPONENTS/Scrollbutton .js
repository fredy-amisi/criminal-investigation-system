import React, { useEffect } from "react";
import "../Css/scrollbutton.css";

const Scrollbutton = () => {
  useEffect(() => {
    const toggleScrollToTopButton = () => {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      if (window.scrollY > 20) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener('scroll', toggleScrollToTopButton);

    return () => {
      window.removeEventListener('scroll', toggleScrollToTopButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button id="scrollToTopBtn" onClick={scrollToTop}>
      &#8593;
    </button>
  );
};

export default Scrollbutton;
