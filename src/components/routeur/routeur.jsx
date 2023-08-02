// Table de routage du site

import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/index.jsx";
import Error from "../../pages/error/error.jsx";
import Place from "../../pages/place/place.jsx";
import About from "../../pages/about/about.jsx";

function Routeur () {
 return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:placeId" element={<Place />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
 )
}

export default Routeur;