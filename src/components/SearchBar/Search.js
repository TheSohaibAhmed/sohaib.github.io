import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { ResizingInput, SearchButton } from "./SearchbarStyles.js"

const Wrapper = styled.div`
  outline: none;
  max-width: 1200px;
  width: 60%;
  height: 54px;
  padding: 6px 0px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  color: #031b4e;
  margin: 0em auto 4em;
`

const SearchBar = ({ defaultValue, callback }) => {
  const [active, setActive] = useState(false)
  const [focus, setFocus] = useState(false)
  const inputRef = useRef(null)

  const handleFocus = () => {
    setActive(true)
    setFocus(true)
  }
  const handleBlur = () => {
    console.log(inputRef.current.value)
    setFocus(false)
    setActive(false)
    callback(inputRef.current.value)
  }
  const handleClick = () => {
    console.log(inputRef.current.value)
    callback(inputRef.current.value)
  }

  return (
    <Wrapper>
      <>
        <ResizingInput
          active={active}
          placeholder="Search..."
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={defaultValue}
        />
        <SearchButton
          active={active}
          focus={focus}
          onClick={() => {
            setActive(!active)
            setFocus(!focus)
            handleClick()
          }}
        />
      </>
    </Wrapper>
  )
}

export default SearchBar
