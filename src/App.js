import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Profile from "./Section/ProfilePic";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p
    //       data-aos="fade-zoom-in"
    //       data-aos-offset="200"
    //       data-aos-easing="ease-in-sine"
    //       data-aos-duration="600"
    //     >
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     {/* Section Main */}
    //     <Profile />
    //   </header>
    // </div>

    // ReCode

    <div className="MainContainer">
      <h1>Hello</h1>
      <Profile />
      {/* Header Section */}
      <div></div>
      {/* About Me Section */}
      <div></div>
      {/* Skill Section */}
      <div></div>
      {/* Project Section */}
      <div></div>
      {/* Education Section */}
      {/*Contact Section*/}
      <div></div>
    </div>
  );
}

export default App;
