import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading=React.createElement("h1",{id:"heading"},"Namaste React");

//JSX- is not HTML in JS
//It has HTML-like or XML-like Syntax
//JSX is transpiled(converted) before it reaches the JS done by PARCEL(Babel)
//Working of Babel:
//JSX => React.createElement =>ReactElement-JS Object => HTMLElement(render)
const jsxheading= <h1 id="heading">Namaste React using JSX</h1>;

//React Component
//Class Based Component - OLD
//React Functional Component - NEW

//React Element
const heading2=(
    <h1 className="head">
        Namaste React from JSX
    </h1>
);
const elem=<span>React Element</span>
//React Component
const Title=()=>(
    <div id="container">
        <h1> This is Title Component</h1>
    </div>
);
let num=1000;
//Component Composition
const HeadingComponent=()=>(
    <div>
        <h2>{num}</h2>
        <h3>{10*30}</h3>
        {heading2}
        {Title()}
        <Title></Title>
        <Title />
        <h1>{elem}Namaste React Functional Component</h1>
    </div>
    
);



const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeadingComponent />);