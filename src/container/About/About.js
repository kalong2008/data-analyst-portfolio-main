import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const abouts = [
    {title: "Statistical Modelling and Regression Analysis", description: "Proficient in SQL, Python, and R for large-scale data analysis, extracting valuable insights. Skilled in data manipulation to identify patterns, trends, and correlations, enabling precise predictions. Experienced in statistical modeling to forecast system behavior using observed data. Creates advanced forecasting models to optimize decision-making.", imgUrl: images.statistic}, 
    {title: "Data Visualization", description: "Expert in visualizing raw data into impactful graphical representations, enhancing comprehension of complex information. Proficient in utilizing data visualization techniques for comprehensive data analysis, unveiling hidden patterns, trends, and correlations. Facilitates users in gaining valuable insights and deeper understanding with ease and efficiency.", imgUrl: images.visual},
    {title: "Machine Learning", description: "Experienced in applying Machine Learning, a potent branch of AI, to enable autonomous learning from data, eliminating explicit programming. Proficient in iterative training to identify patterns, establish variable correlations, and make precise predictions for future outcomes. Adept at employing advanced Machine Learning techniques to extract valuable insights and drive data-centric decision-making.", imgUrl: images.ai},
    {title: "Front-end Development", description: "Proficient in HTML, JavaScript, and CSS. Skilled in web development and design, creating dynamic and interactive web pages with JavaScript. Experienced in using HTML and CSS to structure and style web content. Continuously updating knowledge in industry trends for high-quality web solutions.", imgUrl: images.frontend},
    {title: "Digital Media Solution", description: "Experienced in leveraging Google Analytics and Tag Manager for data-driven decision-making and optimized digital marketing. Proficient in tracking website traffic, user behavior, and campaign performance, providing valuable insights. Skilled in seamless integration of third-party tools and generating comprehensive reports for performance analysis and strategic optimizations.", imgUrl: images.seo}]

  return (
    <>
      <h2 className="head-text">Expertise</h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
