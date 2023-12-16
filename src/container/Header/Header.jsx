"use client"

import "./Header.scss"
import { motion } from "framer-motion"
import { images } from "@/constants"
import { AppWrap } from "@/wrapper"
import Image from "next/image"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cm app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kimuel</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Fullstack / Blockchain</p>
            <h1 className="p-text">Software Engineer</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Image
          width={1000}
          height={1000}
          src={images.profile.src}
          alt="profile_bg"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle.src}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.nextjs, images.react, images.node, images.solidity].map(
          (circle, index) => (
            <div className="circle-cmp app_flex" key={`circle-${index}`}>
              <Image height={1000} width={1000} src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home")
