import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  //const [experiences, setExperiences] = useState([]);
  //const [skills, setSkills] = useState([]);

  //useEffect(() => {
  //  const query = '*[_type == "experiences"]';
  //  const skillsQuery = '*[_type == "skills"]';

  //  client.fetch(query).then((data) => {
  //    setExperiences(data);
  //  });

  //  client.fetch(skillsQuery).then((data) => {
  //    setSkills(data);
  //  });
  //}, []);

  const skills = [
    {name: "R", bgColor: "#fff", icon: images.r},
    {name: "Python", bgColor: "#fff", icon: images.python},
    {name: "Power BI", bgColor: "#fff", icon: images.powerbi},
    {name: "React", bgColor: "#fff", icon: images.react},
    {name: "Google Tag Manager", bgColor: "#fff", icon: images.gtm},
    {name: "Rust", bgColor: "#fff", icon: images.rust}];
  const experiences = [
    {year: "Jan 2022 – Current", works: [{index: "2022_bokss", name: "Senior Research Assistant", company: "Baptist Oi Kwan Social Service – Integrated Services for Mental Wellness", desc: "Developing a holistic platform in providing psychological assessment, counselling, research, and training in helping individuals to manage emotions, and evaluating the impact of the platform, data analysis, and writing report."}]},
    {year: "Jul 2019 – Dec 2021", works: [{index: "2019_polyu", name: "Project Associate", company: "The Hong Kong Polytechnic University – Department of Land Surveying and Geo-Informatics", desc: "Developing a holistic course management system to enhance the teaching and learning experience in university, evaluating the impact of the system, data analysis, and writing reports."}]},
    {year: "Sep 2017 – Jul 2019", works: [{index: "2017_polyu", name: "Research Associate", company: "The Hong Kong Polytechnic University – School of Nursing", desc: "Monitoring the research project about the impact of green space on human well-being, data entry and data analysis using SPSS, and writing report."}]},
    {year: "Aug 2015 – Aug 2017", works: [{index: "2015_eduhk", name: "Senior Research Assistant", company: "The Education University of Hong Kong– Department of Health and Physical Education", desc: "Monitoring the pain management project, data entry, and data analysis using SPSS, writing reports, as well as implementing treatment group (CBT) and control group."}]},
    {year: "Jul 2013 – Aug 2013", works: [{index: "2013_polyu", name: "Research Assistant", company: "The Hong Kong Polytechnic University – School of Nursing", desc: "Leading a street intercept interview project, data entry, and data analysis."}]},
    {year: "Nov 2012 – Mar 2013", works: [{index: "2012_eduhk", name: "Research Assistant", company: "The Hong Kong Institute of Education – Department of Psychological Studies", desc: "Interviewing patient and caregiver, administering and handling data entry, and data analysis."}]}]

  return (
    <>
      <h2 className="head-text">Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex app__skills-container"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <div key={work.index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.index}
                      key={work.index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.index}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "experience",
  "app__whitebg"
);
