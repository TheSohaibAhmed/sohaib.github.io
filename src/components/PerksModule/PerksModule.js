import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../images/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container">
        <Perk
          title="Entrepreneur"
          content="I'm currently running 99point9 -- a bootstrapped ed-tech. startup that's changing how we teach students. Overall, I'm more-so a self-starter, find-a-problem, and fix-it-yourself kinda guy."
        />
        <Perk
          title="Educator"
          content="I'm a student-centerist and focus on effortless-yet-fun student learning that challenges our preconceived notions of how much and how fast we can learn. I've also aimed for the seemingly impossible: how does one make sure that no student is ever average? In my opinion, where someone comes from or whether they can afford it is a problem that educator -- not the student -- should solve."
        />
        <Perk
          title="Content Creator"
          content="I get my hands dirty by actively redesigning personalized content that tailors effectively to one's personality, knowledge-level, and so much more. I create videos, audios, visuals, and mindmaps -- amongst other media -- with the idea that it can't be 'one-size-fits-all'. You can imagine that this takes quite a bit of thought into how one has to segment the content before actually creating it."
        />

        <Perk
          title="Technologist"
          content="Tech. makes my life so much easier and allows us to scale our ideas, and personalize them so we don't lose our product quality. Basically, I can take an idea drawn on a sketchpad to a 1M+ clients web-and-mobile app.; create insanaly innovative ways of interacting with students, and certainly-novel ways of teaching."
        />
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
