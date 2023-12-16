"use client"

import React, { useEffect, useState } from "react"
import "./About.scss"
import { motion } from "framer-motion"
import { images } from "@/constants"
import { urlFor, client } from "@/client/client"
import { AppWrap, MotionWrap } from "@/wrapper"
import Image from "next/image"

function About() {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`${index}`}
          >
            <Image
              width={1000}
              height={1000}
              src={urlFor(about.imageurl).url()}
              alt={about.name}
            />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.name}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
)
