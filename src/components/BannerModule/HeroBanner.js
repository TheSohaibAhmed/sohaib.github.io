import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import { MdArrowDownward as Arrow } from "react-icons/md"
import Button from "../Button/Button"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import Typed from "typed.js"

const Highlight = ({ children, dtypedRefay }) => {
  const [show, setShow] = useState(false)
  const multiline = false
  const animationDtypedRefay = "200"
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
          color="#ffc400"
          show={show}
          // multiline={multiline}
          animationDtypedRefay={0}
          animationDuration={animationDuration}
        >
          {children}
        </RoughNotation>
      </span>
    )
  }
  return <div>{children}</div>
}
const Underline = ({ color, children }) => {
  const [show, setShow] = useState(false)
  const animationDelay = "200"
  const animationDuration = 1000
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 300)
  }, [])
  if (typeof window !== undefined) {
    return (
      <span>
        <RoughNotation
          type="underline"
          color="var(--primary)"
          show={show}
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
const DelaySpan = styled.span`
  opacity: 0;
  transition: opacity 0.5s ease-in;
`
const DelayText = ({ children, delay }) => {
  const delayRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      delayRef.current.style.opacity = 1
    }, delay)
  }, [])
  return typeof window !== undefined ? (
    <DelaySpan ref={delayRef}>{children}</DelaySpan>
  ) : (
    <span>{children}</span>
  )
}
const love = '<i style="color: #ffc400">love</i>'
const startup = '<span style="color: #ffc400">startup</span>'
const teach = '<span style="color: #ffc400">teach</span>'
const code = '<span style="color: #ffc400">code</span>'
const design = '<span style="color: #ffc400">design</span>'
const mentor = '<span style="color: #ffc400">mentor</span>'
const help = '<span style="color: #ffc400">help others</span>'
const subTitle = [
  `I ${love} building things and solving problems!`,
  `I ${love} building things and solving problems! I also run a ${startup}, `,
  `I ${love} building things and solving problems! I also run a ${startup}, ${teach}, `,
  `I ${love} building things and solving problems! I also run a  ${startup}, ${teach}, ${code}, `,
  `I ${love} building things and solving problems! I also run a  ${startup}, ${teach}, ${code}, ${design}, `,
  `I ${love} building things and solving problems! I also run a  ${startup}, ${teach}, ${code}, ${design}, ${mentor}, `,
  `I ${love} building things and solving problems! I also run a  ${startup}, ${teach}, ${code}, ${design}, ${mentor}, and ${help}.`,
]
const HeroBanner = ({
  children,
  title,
  // subTitle,
  price,
  enquire,
  shouldAnimate,
}) => {
  function scrollToArea() {
    navigate("#topContent")
  }
  const typedRef = useRef(null)
  const buttonRef = useRef(null)
  useEffect(() => {
    var options = {
      strings: subTitle,
      typeSpeed: 45,
      loop: false,
      showCursor: false,
      smartBackspace: true,
      startDelay: 1000,
    }
    setTimeout(() => {
      const typed = new Typed(typedRef.current, options)
    }, 2000)
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
              // border: "10px solid rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
            }}
          />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                <Highlight>{title}</Highlight>{" "}
                <DelayText delay={2000}>I'm Sohaib</DelayText>
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && (
              <h2>
                <span ref={typedRef}></span>
              </h2>
            )}
            {price && (
              <h2 className="price">
                £{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            {enquire && (
              <Button Highlight="Enquire Now" as={Link} to="/contact" />
            )}
            <button ref={buttonRef} onClick={scrollToArea}>
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
