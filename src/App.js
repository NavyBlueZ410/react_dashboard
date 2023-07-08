import React from "react"
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar"
import Profile from './pages/Profile'

function App() {
  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
