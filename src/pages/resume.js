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

const education = [
  {
    section: "Education",
    title: "Harvard Business School Online",
    position: "Credential of Readiness (CoRE)",
    subtitle: "",
    description: "",
    startDate: "Sep. '15",
    tags: [],
  },
  {
    section: "Education",
    title: "University of Toronto",
    position: "B.Sc. Human Biology & Bioethics",
    subtitle: "",
    description: "",
    startDate: "Sep. '11",
    endDate: "Jun. '15",
    tags: [],
  },
  {
    section: "Education",
    title: "University of Windsor",
    position: "Biology",
    subtitle: "B.Sc. Biology",
    description: "",
    startDate: "Sep. '10",
    endDate: "Jun. '11",
    tags: [],
  },
]
const work = [
  {
    section: "Education",
    title: "99point9",
    position: "Chief Operating Officer (COO)",
    subtitle: "",
    description: `
      <ul>
        <li>
          • Oversees the entirety of 99point9’s operations Oversees the
          recruitment, management, and completion of 1000+ clients per year;
          works with Co-executive directors to define 99point9’s vision, and
          translates set goals into organizational policy, budgetary changes,
          quarterly growth targets, curricula reformation, quality-control
          measures, national and international growth schemes.
        </li>
        <li>
          • Oversees the entirety of 99point9’s operations, reports to and works
          with Co-Executive Directors to define vision, optimizing company
          budgeting and capital generation, quality-checking and researching
          curricula, developing regional, national, and international growth
          schemes (as well as content expansion schemes), defining student
          acquisition and instructor recruitment strategies, and organizing
          course logistics (including venues, dates and times, and student
          feedback and counselling mechanisms)
        </li>
        <li>
          • Successfully oversaw 99point9’s student content-delivery system;
          liaised between, understood the needs of, and balanced
          instructor-student-admin requirements, by working with creatives,
          designers, software-engineers, and content-creators. Currently,
          pioneers 99point9’s digital initiatives and new technologies.
        </li>
      </ul>,
    `,
    startDate: "Sep. '16",
    tags: [],
  },
  {
    section: "Work",
    title: "Ranomics",
    position: "Business Development",
    subtitle: "",
    description: "",
    startDate: "Sep. '16",
    tags: [],
  },
  {
    section: "Work",
    title: "MDHomeCall",
    position: "Chief Operating Officer (COO)",
    subtitle: "",
    description: "",
    startDate: "Oct. '14",
    endDate: "Jan. '16",
    tags: [],
  },
]

const data = [education, work]
const dataSection = ["Education", "Experiences"]
const Resume = () => {
  const [searchResults, setSearch] = useState(data)
  const handleSearch = input => {
    if (input === "") {
      setSearch(data)
    } else {
      console.log(input)
      let result
      result = data.map((section, index) => {
        return section.filter(item => {
          let searchItems = [
            item.title,
            item.position,
            item.subtitle,
            item.description,
            item.startDate,
            item.endDate,
          ]
          for (var i = 0; i < 6; i++) {
            if (
              searchItems[i] &&
              searchItems[i].toLowerCase().includes(input.toLowerCase())
            ) {
              return item
            }
          }
        })
      })
      console.log(result)
      setSearch(result)
    }
  }
  return (
    <>
      <Seo title="Sohaib Ahmed's Resume" />
      <Layout>
        <SimpleBanner title="Resumé" />

        <Wrap>
          <SearchBar callback={i => handleSearch(i)} />
          {searchResults.map((group, i) => (
            <>
              <h2>{dataSection[i]}</h2>
              {group.map((item, gi) => (
                <Container>
                  <HCenter>
                    <TitleWrap>
                      <Title>{item.title}, </Title>{" "}
                      <Position>{item.position}</Position>
                    </TitleWrap>
                    <Date>{item.startDate}</Date>
                  </HCenter>
                </Container>
              ))}
            </>
          ))}
        </Wrap>
      </Layout>
    </>
  )
}

export default Resume
