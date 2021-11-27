import React, { useState, useEffect, useRef } from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Typed from "typed.js"

const Text = ({ children, delay }) => {
  const [show, setShow] = useState(true)
  const multiline = false
  const animationDelay = "200"
  const animationDuration = 200

  if (typeof window !== undefined) {
    return (
      <span>
        <RoughNotation
          type="highlight"
          color="var(--primary)"
          show={show}
          // multiline={multiline}
          // animationDelay={delay}
          // animationDuration={animationDuration}
        >
          {children}
        </RoughNotation>
      </span>
    )
  }
  return <div>{children}</div>
}

const HeroBanner = ({
  children,
  title,
  subTitle,
  price,
  enquire,
  shouldAnimate,
}) => {
  function scrollToArea() {
    navigate("#topContent")
  }
  var typedTitle = title
  // useEffect(() => {
  //   var options = {
  //     strings: [`<i>Adaaab</i>`, "<i>Hi there!</i>"],
  //     typeSpeed: 150,
  //     backSpeed: 0,
  //     backDelay: 1000,
  //     loop: false,
  //     showCursor: false,
  //     fadeOut: true,
  //     startDelay: 1000,
  //   }
  //   typedTitle = new Typed(".typed", options)
  // }, [])
  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src="../../images/soh.jpg"
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                <Text delay={0}>{title}</Text>
                <span className="typed"></span> I'm Sohaib
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            {enquire && <Button text="Enquire Now" as={Link} to="/contact" />}
            <button onClick={scrollToArea}>
              <Arrow />
            </button>
          </div>
        </div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default HeroBanner
