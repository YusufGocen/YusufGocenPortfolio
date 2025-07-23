import React from "react";
import "./StarBackground.css";

const getRandom = (max) => Math.floor(Math.random() * max);

const StarBackground = () => {
  const stars = Array.from({ length: 400 }).map((_, i) => ({
    top: getRandom(100),
    left: getRandom(100),
    delay: Math.random() * 6,
  }));

  return (
    <div className="star-background">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <div className="meteor" style={{ top: "10%", left: "70%" }} />
      <div className="meteor" style={{ top: "10%", left: "5%" }}/>
      <div className="meteor" style={{ top: "5%", left: "40%" }}/>


      <div className="meteor" style={{ top: "30%", left: "70%" }}/>
      <div className="meteor" style={{ top: "35%", left: "5%" }}/>

      <div className="meteor" style={{ top: "50%", left: "5%" }}/>
      <div className="meteor" style={{ top: "60%", left: "90%" }}/>

      <div className="meteor" style={{ top: "70%", left: "5%" }}/>
      <div className="meteor" style={{ top: "80%", left: "60%" }}/>

      <div className="meteor" style={{ top: "90%", left: "5%" }}/>
      <div className="meteor" style={{ top: "95%", left: "50%" }}/>



      <div className="meteor" style={{ top: "60%", left: "60%", animationDelay: "2s" }} />
    </div>
  );
};

export default StarBackground;
