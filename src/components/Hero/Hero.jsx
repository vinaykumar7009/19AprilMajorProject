import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_images from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div >
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE YOUR AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE FULLEST
            </span>

          </div>
        </div>
        {/*figures*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978 </span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>


        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </div>


        {/*hero images*/}

        <img src={hero_images} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />


        {/*calories*/}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
