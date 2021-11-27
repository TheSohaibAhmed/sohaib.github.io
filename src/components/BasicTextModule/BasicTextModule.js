import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>About Him</h2>
        <p style={{ marginBottom: "60px" }}>I am an XYZ</p>
        <Button text="My Journey" as={Link} to="/products" />
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
