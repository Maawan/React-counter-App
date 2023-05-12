import React from "react"

function Card(props){
    const [count , setCount] = React.useState(0);
    function increase(){
        setCount(count + 1)
    }
    function decrease(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }
    return (
    <div className="counter">
      <h1>{props.teamName}</h1>
      <h2 class="count">{count}</h2>
      <button id="inc" onClick={increase}>Increment</button>
      <button id="dec" onClick={decrease}>Decrement</button>
      <button id="reset" onClick={reset}>Reset</button>
    </div>
    );
}
export default Card;