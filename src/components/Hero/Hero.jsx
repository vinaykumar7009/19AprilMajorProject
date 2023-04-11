import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_images from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';
const Hero = () => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/*the best ad*/}
        <div className="the-best-ad">
          <motion.div

            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}



          ></motion.div>
          <span>The best fitness club in the Chandigarh</span>
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
            <span>+250</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+3965</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+80</span>
            <span>fitness program</span>
          </div>
        </div>
        {/*hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">

            <Link to='join-us'
              span={true}
              smooth={true}>Get Started</Link>


          </button>
          <button className="btn">
            <Link to='VideoHeading'
             span={true}
             smooth={true}> Learn more</Link>
             </button>
        </div>
      </div>
      <div className="right-h" id='contact'>
        <button className='btn'><Link to='join-us'
          span={true}
          smooth={true}
        >JOIN</Link></button>


        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>


        {/*hero images*/}

        <img src={hero_images} alt="" className='hero-image' />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}

          src={hero_image_back} alt="" className='hero-image-back' />


        {/*calories*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
