import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Properties} from "./components/template/Properties/Properties";
import './App.css';


function App() {
  return (
      <>
          <Routes>
              <Route path="/test" element={<Properties/>}/>
          </Routes>
      </>
  );
}

export default App;
