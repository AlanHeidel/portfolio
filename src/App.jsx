import "./App.css";
import LiquidEther from "./components/backgrounds/LiquidEther/LiquidEther";
import DotGrid from "./components/backgrounds/DotGrid/DotGrid";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="background-container">
        {/* <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        /> */}
        <DotGrid
          dotSize={3}
          gap={25}
          baseColor="#271e37"
          activeColor="#7c3aed"
          proximity={120}
          shockRadius={150}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="content">
        <Header />
        <main>
          <div className="test">asd</div>
          <section id="home">...</section>
          <section id="projects">...</section>
        </main>
      </div>
    </>
  );
}

export default App;
