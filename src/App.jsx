// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Explorer from "./pages/Explorer";
// import Popular from "./pages/Popular";
// import About from "./pages/About";
// import Contact from "./pages/Contact"; 
// import EmojiProvider from "./context/EmojiContext";

// const App = () => {
//   return (
//     <EmojiProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explorer" element={<Explorer />} />
//           <Route path="/popular" element={<Popular />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} /> 
//         </Routes>
//       </Router>
//     </EmojiProvider>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Popular from "./pages/Popular";
import About from "./pages/About";
import Contact from "./pages/Contact"; 
import EmojiProvider from "./context/EmojiContext";

const App = () => {
  return (
    <EmojiProvider>
      <Router basename="/emoji-explorer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </EmojiProvider>
  );
};

export default App;

