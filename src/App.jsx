import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Document from "./pages/Document/Document";
import EventPage from "./pages/EventPage/EventPage";
import Gallery from "./pages/Gallery/Gallery";
import Golfist from "./pages/Golfist/Golfist";
import Home from "./pages/Home/Home";
import InfoGolf from "./pages/InfoGolf/InfoGolf";
import Oferta from "./pages/Oferta/Oferta";
import Participate from "./pages/Participate/Participate";
import Past from "./pages/Past/Past";
import Politik from "./pages/Politik/Politik";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {
  return (
    <>
      <div className="contayner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/golfist" element={<Golfist />} />
          <Route path="/info" element={<InfoGolf />} />
          <Route path="/singlePost" element={<SinglePost />} />
          <Route path="/document" element={<Document />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/politik" element={<Politik />} />
          <Route path="/past" element={<Past />} />
          <Route path="/participate" element={<Participate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
