import {useState} from "react";
function  Number () {
    const[count,setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+5)}>change</button>
              
        </div>
    );
}
export default Number;


