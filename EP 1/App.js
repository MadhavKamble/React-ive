/**
 * 
 * <div id="parent">
 *  <div id="child">
 * <h1></h1>
 * </div>
 * </div>
 * 
 * 
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am a H1"),React.createElement("h2",{},"I am a H2 ")]
        ),
    React.createElement(
            "div",
            {id:"child"},
            [React.createElement("h1",{},"I am a H1"),React.createElement("h2",{},"I am a H2 ")]
        )]
    
    )
    console.log(parent)
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);


// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React! "
//     );
//     root.render(heading);