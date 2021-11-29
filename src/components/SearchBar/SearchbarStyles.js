import React from "react"
import styled from "styled-components"

export const ResizingInput = styled.input`
  position: relative;
  z-index: 5;
  // margin: auto;
  width: ${props => (!!props.active ? "650px" : "3em")};
  height: 100%;
  outline: none;
  border: 1px solid rgb(0, 97, 235, 0.5);
  color: black !important;
  padding: 0 20px 0 20px;
  // box-shadow: 0 0 25px 0 white, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  opacity: ${props => (!!props.active ? "1" : "0")};
  padding: 0 16px;
  background-color: #fff;
  font-weight: normal;
  font-size: 1em;
  webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  border-radius: 3px;
  word-spacing: normal;
  text-align: start;
  cursor: ${props => (!!props.active ? "text" : "default")};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border-color: none;
  }
`
export const SearchButton = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: ${props => (props.focus ? "81%" : "0")};
  bottom: 0;
  right: 0;
  width: 4em;
  height: 4em;
  background: ${props => (props.focus ? "var(--primary)" : "transparent")};
  //background: transparent;
  border-radius: 50%;
  transition: all 0.2s;
  z-index: ${props => (props.focus ? "6" : "4")};
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
  outline: none;
  transform: scale(0.6);
  border: 1px solid rgb(243, 243, 243, 0.2);

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &::before {
    content: "";
    position: absolute;
    margin: auto;
    top: ${props => (props.focus ? "0" : "22px")};
    right: 0;
    bottom: 0;
    left: ${props => (props.focus ? "0" : "22px")};
    width: ${props => (props.focus ? "25px" : "12px")};
    height: 2px;
    background: ${props => (props.focus ? "black" : "var(--primary)")};

    transform: rotate(45deg);
    transition: all 0.2s;
  }
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: ${props => (props.focus ? "0" : "-5px")};
    right: 0;
    bottom: 0;
    left: ${props => (props.focus ? "0" : "-5px")};
    width: 25px;
    height: ${props => (props.focus ? "2px" : "25px")};
    border-radius: ${props => (props.focus ? "0%" : "50%")};
    border: ${props => (props.focus ? "none" : "2px solid var(--primary)")};
    transition: all 0.2s;
    background: ${props => (props.focus ? "black" : "transparent")};
    transform: ${props => (props.focus ? "rotate(-45deg)" : "rotate(0)")};
  }
`
