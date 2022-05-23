import React from "react";
import Content from "../Content";
import "./style.css";

const Home: React.FC = () => (
  <>
    <div className="home__header">
      <label className="home__title">instaPro</label>
    </div>
    <Content />
  </>
);

export default Home;
