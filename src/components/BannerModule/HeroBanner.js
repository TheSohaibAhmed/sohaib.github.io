import React, { useState, useEffect, useRef } from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Typed from "typed.js"

const Text = ({ children, delay }) => {
  const [show, setShow] = useState(false)
  const multiline = false
  const animationDelay = "200"
  const animationDuration = 1000
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [])
  if (typeof window !== undefined) {
    return (
      <span>
        <RoughNotation
          type="highlight"
          color="var(--primary)"
          show={show}
          // multiline={multiline}
          animationDelay={0}
          animationDuration={animationDuration}
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
  var typed
  useEffect(() => {
    var options = {
      strings: [subTitle],
      typeSpeed: 75,
      backSpeed: 0,
      backDelay: 1000,
      loop: false,
      showCursor: false,
      fadeOut: true,
      startDelay: 1000,
    }
    setTimeout(() => {
      typed = new Typed(".typed", options)
    }, 1000)
  }, [])
  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <StaticImage
            // imgClassName="banner__image--content"
            src="../../images/macbook-color.jpg"
            className="banner__image"
            imgClassName="banner__image--content"
            alt="Banner Image"
            placeholder="blurred"
            style={{
              width: "300px",
              height: "300px",
              transform: "translate(70vw, 25vh)",
              borderRadius: "50%",
              position: "absolute",
              border: "10px solid rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
            }}
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                <Text delay={0}>{title}</Text>
                I'm Sohaib
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && (
              <h2>
                <span className="typed">{typed}</span>
              </h2>
            )}
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
