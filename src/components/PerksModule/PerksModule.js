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
        <Perk title="2" content="Startups Led" />
        <Perk title="$1.5M+" content="Revenue generated" />
        <Perk title="5000+" content="Students taught" />
        <Perk title="50,000+" content="Lines of code written" />
        <Perk title="2M+" content="lecture-content-words written" />
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
