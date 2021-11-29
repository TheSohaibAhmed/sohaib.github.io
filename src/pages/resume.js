import React, { useState, useRef } from "react"
import Layout from "../components/Layout"
import Features from "../components/Products/Products"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import SearchBar from "../components/SearchBar/Search"

import styled from "styled-components"

const Container = styled.div`
  box-sizing: border-box;
  width: 650px;
  min-height: 50px;
  display: flex;
  flex-flow: column nowrap;
  padding: 8px 14px;
  background: rgb(230, 230, 230);
  margin: 15px 0;
  border-radius: 2px;
  justify-content: flex-start;
  div {
    color: black;
  }
  p {
    color: black;
  }
`
const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`
const TitleWrap = styled.span`
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`
const Title = styled.h5`
  margin: 0px;
  color: black;
`
const Position = styled.p`
  font-weight: 300;
  margin: 0px;
  color: black;
  font-size: 14px;
`
const Date = styled.h6`
  margin: 0px;
  width: 30%;
  color: black;
  font-weight: 300;
  text-align: right;
`
const HCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Description = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 300;
`

const data = [
  {
    section: "",
    title: "",
    position: "",
    subtitle: "",
    description: "",
    startDate: "",
    endDate: "",
    tags: [],
  },
]

const Resume = () => {
  return (
    <>
      <Seo title="Sohaib Ahmed's Resume" />
      <Layout>
        <SimpleBanner title="Resumé" />

        <Wrap>
          <SearchBar />
          <h2>Education</h2>
          <Container>
            <HCenter>
              <TitleWrap>
                <Title>University of Toronto, </Title>{" "}
                <Position> Human Biology & Bioethics</Position>
              </TitleWrap>
              <Date>21st October 1937</Date>
            </HCenter>
          </Container>
          <Container>
            <HCenter>
              <TitleWrap>
                <Title>Harvard Business School, </Title>{" "}
                <Position> Credential of Readiness Certificate</Position>
              </TitleWrap>
              <Date>21st October 1937</Date>
            </HCenter>
          </Container>
          <Container /> <Container /> <Container />
        </Wrap>
      </Layout>
    </>
  )
}

export default Resume
