import React , {useContext, useState} from "react"
import ThemeContext from "../Context/ThemeContext";
import App2 from "./App2";
function App(){
    const themeHook = useState("dark");
    return (
        <ThemeContext.Provider value = {themeHook}>
            <App2 />
        </ThemeContext.Provider>
    );
}
export default App;