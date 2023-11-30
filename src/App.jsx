import { lazy, Suspense } from "react";
import "./App.css";
const Spline = lazy(() => import("@splinetool/react-spline"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <nav className="navbar">
          <div>
            Mini room 3D design with spline. Tutorial from{" "}
            <a
              href="https://www.youtube.com/watch?v=XHvCk7Z2x1A"
              target="_blank"
            >
              here.
            </a>
          </div>
        </nav>
        <Spline scene="https://prod.spline.design/dXbJm182PXZBJUCS/scene.splinecode" />
      </Suspense>
    </>
  );
}

export default App;
