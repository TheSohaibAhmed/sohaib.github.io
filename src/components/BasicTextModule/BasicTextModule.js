import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>Who's this guy?</h2>
        <p>
          Ah! I always struggle to answer this one cz it's a bit of a toughie.
        </p>
        <p>
          Work wise, I can't quite say that I have <i>a</i> "career". More so,
          I'd say I'm into learning new things super well and fast, and bringing
          some of those seemingly unrelated disciplines together to solve
          difficult problems.
        </p>
        <p style={{ marginBottom: "60px" }}>
          At home, I'm either someone who's probably not doing anything -- I
          have this notion that it's actually a good thing to sit around :P If
          not that, you might find me cooking, gaming, chatting with people,
          checking-in on others, and maybe trying to find mini-weekly-hobby.
          <br />
          <Button text="My Journey" as={Link} to="/products" />
        </p>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
