import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import YAWI from "./pages/yawi";
import Learn from "./pages/Learn";
import Relax from "./pages/Relax";
import ImageDisplay from "./pages/ImageDisplay";
import VideoPage from "./pages/VideoDisplay";
import EmotionDetection from './components/EmotionDetection';
import PCOSPredictionForm from "./Models/PCOSPredictionForm";
import MoodSelector from "./pages/Periods/MoodSelector";
import Q2 from "./pages/Periods/Q2";
import Eat from "./pages/Periods/Eat";
import Yoga from "./pages/Periods/yoga";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the home page.";
        break;
      case "/yawi":
        title = "Auti Embrace";
        metaDescription = "Experience the Auti Embrace.";
        break;
      case "/learn":
        title = "Learn";
        metaDescription = "";
        break;
      case "/relax":
        title = "Relax";
        metaDescription = "";
        break;
      case "/img":
        title = "Img";
        metaDescription = "";
        break;
      case "/video/:name":
        title = "video";
        metaDescription = "";
        break;
      case "/pcos":
        title = "video";
        metaDescription = "";
        break;
      case "/mood":
        title = "mood";
        metaDescription = "";
        break;
      case "/Q2":
          title = "Q2";
          metaDescription = "";
          break;
      
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<YAWI />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/relax" element={<Relax />} />
      <Route path="/img" element={<ImageDisplay />} />
      <Route path="/video/:videoName" element={<VideoPage />} />
      <Route path="/emotion-recognition" element={<EmotionDetection />} />
      <Route path="/pcos" element={<PCOSPredictionForm />} />
      <Route path="/mood" element={<MoodSelector/>} />
      <Route path="/Q2" element={<Q2/>} />
      <Route path="/eat" element={<Eat/>} />
      <Route path="/yoga" element={<Yoga/>} />
    </Routes>
  );
}

export default App;
