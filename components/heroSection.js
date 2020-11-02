import React, {useContext} from "react"

import ThemeContext from "../context/themeContext"
import AppTheme from "../colors"

const HeroSection = () =>{
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return(
        <div
            style = {{
                padding: "1rem",
                backgroundColor: `${currentTheme.backgroundColor}` ,
                color:`${currentTheme.textColor}`,
                textAlign: "center"
            }}>

            <h1>context API theme toggler</h1>
            <p>this is a nice para</p>
            <button 
            style={{
                backgroundColor:"#26ae60" ,
                padding: "10px 150px" ,
                fontSize: "20px",
                color: "#fff" , 
                border: `${currentTheme.border}`
            }}
            > 
            Click Me </button> 
        </div>
    );
};

export default HeroSection;