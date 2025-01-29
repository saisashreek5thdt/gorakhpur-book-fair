import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    // List of scripts to include
    const scripts = [
      "assets/js/jquery-3.7.1.min.js",
      "assets/js/modernizr.min.js",
      "assets/js/bootstrap.bundle.min.js",
      "assets/js/imagesloaded.pkgd.min.js",
      "assets/js/jquery.magnific-popup.min.js",
      "assets/js/isotope.pkgd.min.js",
      "assets/js/jquery.appear.min.js",
      "assets/js/jquery.easing.min.js",
      "assets/js/owl.carousel.min.js",
      "assets/js/counter-up.js",
      "assets/js/wow.min.js",
      "assets/js/countdown.min.js",
      "assets/js/mainEvent.js",
    ];

    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
