import CanvasContainer from "./CanvasContainer";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title animated-text">The box</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {

  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: false,
    touchMultiplier: 2, 
    infinite: false 
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  
  requestAnimationFrame(raf);

    return (
      <>
        <LoadingScreen />
        
        <div className="experience">
          <CanvasContainer />
        </div>

        <Section1 />
        <Section2 />
        <Section3 />
            
      </>
    )
}

export default App;