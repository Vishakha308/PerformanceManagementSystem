// import React from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Administrator from "./components/administrator";
// import Staff from "./components/staff";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route exact path='/components/administrator' element={<Administrator/>}/>
//     <Route exact path='/components/staff' element={<Staff/>}/>
//     <Route exact path='/' />
//     </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Administrator from "./components/administrator";
import Staff from "./components/staff";
import "./App.css";

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <Routes>
        <Route exact path='/components/administrator' element={<Administrator/>}/>
        <Route exact path='/components/staff' element={<Staff/>}/>
        <Route exact path='/' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
