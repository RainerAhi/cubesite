import React, { useEffect, useState } from "react";

export const Section1 = () => {

    const [hideScrollText, setHideScrollText] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollThreshold = 100;
  
        if (window.scrollY > scrollThreshold) {
          setHideScrollText(true);
        } else {
          setHideScrollText(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <section className="one">
            <div className="nav">
                <div className="left-content">
                    <h1 className="animated-text" >THE BOX</h1>
                </div>
                <div className="right-content">
                    <div className="linksone" >
                    </div>
                </div>
            </div  >
            <div className="mobile-scroll" />
        </section>
    )
}