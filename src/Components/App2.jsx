import React, { useContext } from 'react'
import Card from "./Card"
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Color';
function App2(){
    const [theme , changeTheme] = useContext(ThemeContext);
    const curTheme = AppTheme[theme];
    return(
        <div>
            <div id="container" style={{
                backgroundColor: `${curTheme.mainBack}`
            }}>
                <Card teamName={"Team A"} count={0} />
                <Card teamName={"Team B"} count={0}/>
            </div>
            <button onClick={() => {
                changeTheme(theme === "light" ? "dark" : "light");
            }}> Chnage theme please</button>
        </div>
    )
        
}
export default App2;