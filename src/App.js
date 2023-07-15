import React, { useState} from "react";

import Hero from "./sections/Hero.jsx"
import Cards from "./sections/Cards.jsx"
import Header from "./sections/Header.jsx";
import { MyContext } from "./MyContext.jsx";


function App() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
     setNav(!nav)
  }

  return (

    <div className="App">
    <MyContext.Provider value={{ nav, setNav }}>
      <div className="sticky top-0">
      <Header />
      </div>
    
    <Hero />
    <Cards />
    </MyContext.Provider>
    </div>
    
  );
}

export default App;
