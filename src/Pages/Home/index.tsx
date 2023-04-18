import React, { useState } from "react";
import Nav from "../../Components/Nav";
import "./style.css";
import { AiOutlineHeart } from "react-icons/ai";

function Home() {
  const [activeCategory, setActiveCategory] = useState<String | null>("all");
  return (
    <div className="home_container">
      <div className="home_wrapper">
        {/* <Nav /> */}
        <HomeHero />
        <HomeCatrgories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="posts_container">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="home_main">
          <h1>Give your audience an easy way to say thanks.</h1>
          <p>
            Support me makes supporting fun and easy. In just a couple of taps,
            your fans can make the payment (buy you a coffee) and leave a
            message. They don’t even have to create an account!
          </p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

const HomeHero = () => {
  return (
    <div className="hero_container">
      <h1>A supporter is worth a thousand followers.</h1>
      <p>
        Accept donations. Start a membership. Sell anything you like. It’s
        easier than you think.
      </p>
      <form action="">
        <div className="left">
          <p>support.me/</p>
          <input type="text" placeholder="your name" />
        </div>
        <div className="right">
          <div className="btn">Start my page</div>
        </div>
      </form>
      <div className="btn">Start my page</div>
      <p className="info">It’s free, and takes less than a minute.</p>
    </div>
  );
};

interface HomeCatrgoriesProps {
  activeCategory: String | null;
  setActiveCategory: any;
}
const HomeCatrgories = ({
  activeCategory,
  setActiveCategory,
}: HomeCatrgoriesProps) => {
  return (
    <ul className="categories">
      {/* <li>Video creators</li> */}
      <li
        className={`${activeCategory == "all" && "active"}`}
        onClick={() => setActiveCategory("all")}
      >
        All
      </li>
      <li
        className={`${activeCategory == "artists" && "active"}`}
        onClick={() => setActiveCategory("artists")}
      >
        Artists
      </li>
      <li
        className={`${activeCategory === "writers" && "active"}`}
        onClick={() => setActiveCategory("writers")}
      >
        Writers
      </li>
      <li
        className={`${activeCategory === "musicians" && "active"}`}
        onClick={() => setActiveCategory("musicians")}
      >
        Musicians
      </li>
      <li
        className={`${activeCategory === "developers" && "active"}`}
        onClick={() => setActiveCategory("developers")}
      >
        Developers
      </li>
      <li
        className={`${activeCategory === "gaming" && "active"}`}
        onClick={() => setActiveCategory("gaming")}
      >
        Gaming
      </li>
      <li
        className={`${activeCategory === "podcasters" && "active"}`}
        onClick={() => setActiveCategory("podcasters")}
      >
        Podcasters
      </li>

      <li
        className={`${activeCategory === "community" && "active"}`}
        onClick={() => setActiveCategory("community")}
      >
        Community
      </li>
    </ul>
  );
};

export const Post = () => {
  return (
    <div className="post_container">
      <div className="img">
        <img src="/images/img1.jpg" alt="" />
      </div>
      <div className="description">
        <span className="name">Mike Barnes Drums</span>
        <span className="text">
          is creating guitar music and hopefully useful lessons?
        </span>
      </div>
      <div className="stats">
        <div className="icon">
          <AiOutlineHeart size={22} />
        </div>
        <div className="text">1324 Supporters</div>
      </div>
    </div>
  );
};
export default Home;
