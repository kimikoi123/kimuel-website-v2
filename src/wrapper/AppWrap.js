import React from "react"
import { NavigationDots, SocialMedia } from "../components"

export default function AppWrap(Component, idName, classNames) {
  return function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@{new Date().getFullYear()} KIMUEL</p>
            <p className="p-text">ALl rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }
}
