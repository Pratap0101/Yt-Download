// import { BrowserRouter as Routes, Route, BrowserRouter } from "react-router-dom";
// import App from "../App";


// export function About(){
//     return(<>
//            <h1> Hello to About Us </h1>
//            </>)
// }

// export function NavBar(){
//     return <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<App />} ></Route>
//                     <Route path="/about" element={<About />} ></Route>
//                 </Routes>
//             </BrowserRouter>
// }


import { Routes, Route } from "react-router-dom";
import App from "../App";

export function About(){
    return (
        <>
           <h1>Hello to About Us</h1>
        </>
    );
}

export function NavBar(){
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}
