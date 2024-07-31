// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { NavBar } from './components/component.tsx'
// // import { BrowserRouter } from "react-router-dom";

// // ReactDOM.createRoot(document.getElementById('root')!).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <NavBar />
// //     </BrowserRouter>
// //   </React.StrictMode>
// // )


// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <NavBar />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBar } from './components/component.tsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  </React.StrictMode>,
)
