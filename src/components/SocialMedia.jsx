import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/kimikoi123">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kimuel-anqui/">
          <BsLinkedin />
        </a>
      </div>
    </div>
  )
}
