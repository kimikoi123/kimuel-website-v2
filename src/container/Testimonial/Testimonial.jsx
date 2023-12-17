"use client";

import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "@/wrapper";
import { urlFor, client } from "@/client/client";
import "./Testimonial.scss";
import Image from "next/image";
import { testimonialData } from "@/constants/data";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonialData.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <Image
              width={1000}
              height={1000}
              src={testimonialData[currentIndex].imageurl}
              alt={testimonialData[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonialData[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">
                  {testimonialData[currentIndex].name}
                </h4>
                <h5 className="p-text">
                  {testimonialData[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonialData.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonialData.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
