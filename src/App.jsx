import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!showContent) return;

    gsap.to(".main", { scale: 1, rotate: 0, duration: 2, delay: -1, ease: "expo.inOut" });
    gsap.to(".sky", { scale: 1.1, rotate: 0, duration: 2, delay: -0.8, ease: "expo.inOut" });
    gsap.to(".bg", { scale: 1.1, rotate: 0, duration: 2, delay: -0.8, ease: "expo.inOut" });
    gsap.to(".character", { scale: 1.4, x: "-50%", bottom: "-25%", rotate: 0, duration: 2, delay: -0.8, ease: "expo.inOut" });
    gsap.to(".text", { scale: 1, rotate: 0, duration: 2, delay: -0.8, ease: "expo.inOut" });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);

  return (
    <>
      {/* Intro Mask */}
      <div className="svg fixed top-0 left-0 w-full h-screen bg-black z-[100] flex items-center justify-center">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full h-full rotate-[-10deg] scale-[1.7]">
          <div className="landing relative w-full h-screen overflow-hidden bg-black">
            {/* Navbar */}
            <div className="absolute top-5 left-5 z-10 flex items-center gap-5">
              <div className="flex flex-col gap-1">
                <div className="w-6 h-1 bg-white"></div>
                <div className="w-4 h-1 bg-white"></div>
                <div className="w-2 h-1 bg-white"></div>
              </div>
              <h3 className="text-2xl sm:text-4xl text-white leading-none">Rockstar</h3>
            </div>

            {/* Images */}
            <div className="relative w-full h-screen">
              <img
                className="sky absolute top-0 left-0 w-full h-full object-cover scale-[1.5] rotate-[-20deg]"
                src="./sky.png"
                alt=""
              />
              <img
                className="bg absolute top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[-3deg]"
                src="./bg.png"
                alt=""
              />

              {/* Text */}
              <div className="text absolute top-20 left-1/2 -translate-x-1/2 flex flex-col text-white gap-2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12vw] leading-none">grand</h1>
                <h1 className="text-[12vw] leading-none ml-10">theft</h1>
                <h1 className="text-[12vw] leading-none -ml-10">auto</h1>
              </div>

              {/* Character */}
              <img
                className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full py-6 px-6 flex justify-between items-center bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center text-white">
                <i className="ri-arrow-down-line text-2xl sm:text-4xl"></i>
                <h3 className="text-sm sm:text-xl">Scroll Down</h3>
              </div>
              <div className="flex justify-center flex-1">
                <img className="h-8 sm:h-12 md:h-14" src="./ps5.png" alt="" />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full min-h-screen flex items-center justify-center bg-black px-6 py-10">
            <div className="cntnr flex flex-col md:flex-row text-white gap-10 max-w-6xl w-full">
              <div className="md:w-1/2 flex justify-center items-center">
                <img className="w-full max-w-md scale-110" src="./imag.png" alt="" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="text-4xl sm:text-6xl">Still Running,</h1>
                <h1 className="text-4xl sm:text-6xl">Not Hunting</h1>
                <p className="mt-5 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt.
                </p>
                <p className="mt-3 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique.
                </p>
                <p className="mt-3 text-base sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique.
                </p>
                <button className="bg-yellow-500 px-6 py-3 mt-6 text-black text-xl sm:text-2xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
