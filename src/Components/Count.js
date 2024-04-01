import {useState,useEffect} from "react";
function Count () {
    const[count, setCount]= useState(0)
    useEffect(() => console.log(count),[count])

    return(
        <div>
            <p>you clicked{count}times!</p>
            <button onClick={() =>setCount(count+1) }>click me</button>
        </div>
    );
}
export default Count;

