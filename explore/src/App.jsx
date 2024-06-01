import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Experience />
        <ScrollControls damping={2} pages={5}>
          <Scroll html>
            <h1 style={{ position: "absolute", top: "60vh", left: "0.2em" }}>
              Make
            </h1>
            <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
              Scroll
            </h1>
            <h1
              style={{
                position: "absolute",
                top: "210.5vh",
                left: "0.5vw",
                fontSize: "20vw",
              }}
            >
              Creative
            </h1>
            <h1
              style={{
                position: "absolute",
                top: "330.5vh",
                left: "50rem",
                fontSize: "10vw",
              }}
            >
              And Flawless
            </h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
