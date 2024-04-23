import React from "react";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";
import { SongContextProvider } from "../context/SongContextProvider";
import './home.css'

export const Home = () => {
  return (
    <SongContextProvider>
      <div className="home-container">
        <div className="izquierdo">
          <h2>Lado izquierdo</h2>
          <SongList/>
        </div>
        <div className="derecho">
          <h2>Lado derecho</h2>
          <SongDetail/>
        </div>
      </div>
    </SongContextProvider>
  );
};
