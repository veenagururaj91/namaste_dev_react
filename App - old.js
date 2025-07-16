import React from "react";
import ReactDOM from "react-dom/client";

//React Functional Components

const element= <span>Element inside Elemenr</span>

const Title = () => {
    return <h1>Namaste React Functional component</h1>
};

const calculation = (
    <div id ="element">
<h1>Javascript code</h1>
{element}
</div>
);

const HeadingComponents1 = () => (
<div id="container">
    <Title />
    <h2>{calculation}</h2>
    <h1 className="veena">Hello world.</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents1 />);

