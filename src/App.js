import React from "react";
import "./App.css";
import instaLogo from "./images/instagramlogo.png";
import Post from "./components/Post";
import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([
    {
      username: "shanikutta",
      caption: "mujhe nai pata kia hai",
      imageURL: "https://vuejs.org/images/logo.png",
    },
    {
      username: "shanikutta",
      caption: "mujhe nai pata kia hai",
      imageURL: "https://vuejs.org/images/logo.png",
    },
  ]);

  return (
    <div>
      <div className="App">
        <div className="app__header">
          <img className="app__headerImage" src={instaLogo} alt="Logo" />
        </div>
        {/* <h1>Lets Builds Clone React 🚀</h1> */}
        {posts.map((posty) => {
          <Post username={posty.username} caption={posty.caption} />;
        })}
      </div>
    </div>
  );
};

export default App;
