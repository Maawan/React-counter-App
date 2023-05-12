import React from "react"
import Card from "./Card"

function App(){
    return (
        <div id="container">
            <Card teamName={"Team A"} count={0} />
            <Card teamName={"Team B"} count={0}/>
        </div>
    );
}
export default App;