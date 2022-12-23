// write code for Welcome component here
import React from "react";

function Welcome({name}){
    let a=`Hey ${name}!`
    return (
        <div>
            <h1>{a}</h1>
            <h2>Welcome to Newton School.</h2>
        </div>
    );
}

export default Welcome;
