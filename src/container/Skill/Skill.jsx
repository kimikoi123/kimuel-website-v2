"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tooltip as ReactTooltip } from "react-tooltip"

import { AppWrap, MotionWrap } from "@/wrapper"
import { urlFor, client } from "@/client/client"
import "./Skill.scss"
import Image from "next/image"

function Skill() {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperiences(data)
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <div key={work._key}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={`app__skills-exp-work ${index + work.company}`}
                      data-tip
                      data-div={index + work.company + experience.year}
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      anchorSelect={`[data-div="${
                        index + work.company + experience.year
                      }"]`}
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
  )
}

export default AppWrap(
  MotionWrap(Skill, "app__skills"),
  "skills",
  "app__whitebg"
)
