import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
 

  return (
    <>
      <Router>
        <Navbar title="My React Project"/>

        <div className="container my-3">
          <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route  path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          </Routes>
          {/* <BtnSubmit submitype='Conver to lower case'/> */}
        </div>
        {/* <div className="container">
       <Btnrsp/>
       </div> */}
      </Router>
    </>
  );
}

export default App;
