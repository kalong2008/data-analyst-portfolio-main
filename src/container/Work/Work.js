import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Work.scss";

const Work = () => {
  const works = [
    {imgUrl: images.dashboard, title: "Dashboard of Re:Fresh", projectLink: "http://chankalong.github.io", description: "Data analytics and visualization using Quarto, Shiny and Flexdashboard in R", index: "dashboard_refresh"},
    {imgUrl: images.assessment, title: "Psychological Assessment", projectLink: "https://refresh.bokss.org.hk/assessment", description: "Using JavaScript to develop survey with calculation and visualization", index: "assessment"},
    {imgUrl: images.recorder, title: "Audio Recorder", projectLink: "http://refresh-bokss.github.io/record.html", description: "Develop a browser-based audio recorder using JavaScript", index: "recorder"},
    {imgUrl: images.convertor, title: "Base64 Convertor", projectLink: "https://github.com/kalong2008/base64-convert-csv", description: "Create a Base64 converter for audio data using Rust", index: "convertor"}];
  

  return (
    <>
      <h2 className="head-text">
        <span>Portfolio</span>
      </h2>
      <div
        className="app__work-portfolio"
      >
        {works.map((work) => (
          <div className="app__work-item app__flex" key={work.index}>
            <div className="app__work-img app__flex">
            <a href={work.projectLink} target="_blank" rel="noreferrer">
            <img src={work.imgUrl} alt={work.title} />
                  </a>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
);
