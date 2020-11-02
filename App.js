import React, {useState} from "react";

import ThemeContext from "./context/themeContext";
import Header from "./components/header";
import HeroSection from "./components/heroSection";

const App = () =>{
  const themeHook = useState("light")

  return(
   <ThemeContext.Provider value ={themeHook}>
     <div>
       <Header/>
       <HeroSection/>
     </div>
   </ThemeContext.Provider>
  );
} ;

export default App ;