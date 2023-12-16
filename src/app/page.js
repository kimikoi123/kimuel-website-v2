"use client";

import styles from "./page.module.scss";
import { About, Footer, Header, Skill, Testimonial, Work } from "@/container";
import { Nav } from "@/components";

export default function Home() {
  return (
    <main className="app">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
      <div> Test</div>
    </main>
  );
}
