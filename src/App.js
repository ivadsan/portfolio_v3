import React, { Suspense } from "react";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Layout from "./layouts/dashboard";
import Loading from "./components/Loading";
import "./styles/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Suspense fallback={<div>...</div>}>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
