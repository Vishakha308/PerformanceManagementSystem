import React from "react";
import "./App.css";
import "./components/administrator";
import background from "./assets/campusImage.webp";
import manipalLogo from "./assets/manipalLogo.png";
function App() {
  const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
    display: "flex"
  };
  return (
    <div style={backgroundImage}>
      <div className="formStyle">

        <div className="manipalLogo">
          <img src={manipalLogo} />
        </div>

        
        <div className="formStyle-content">
          <form>
            <div> <label htmlFor="mailId ">Mail ID: </label> <input type="email"></input>@jaipur.manipal.edu </div>
            <div>  <label htmlFor="password ">Password</label>
            <input type="password"></input></div>
          </form>
        </div>
        <div className="SignIn_sec">
          <div className="btn">
            <button>Sign In as Administrator</button>
          </div>
          <div className="btn">
            <button>Sign In as Staff</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
